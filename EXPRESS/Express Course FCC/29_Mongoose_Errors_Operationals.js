------MARCANDO ERRORES DE MONGOOSE COMO OPERACIONALES----

Hay 3. tipos:
			1. Invalid ID
			2. Nombres duplicados
			3. Errores por validacion

--------------------------------------
INVALID ID
--------------------------------------

En produccion debemos enviar mensajes de error con significado para los usuarios

Creamos una funcion especial como handleCastErrorDB(err) a la que le pasamos el error y esta funcion va a retornar un nuevo Error creado con la class AppError. 

Como no es una buena practica sobreescribir variables globales -override- creamos una hard copy de err

let error  = {...err};

const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalido ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational trusted error: send mensaje al cliente
  if (err.isOperational) {
    //Esto lo hacemos para diferenciar entre los errores operacionales provenientes de nuestro codigo vs los que podrian venir de un package
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  // Programming u otro error desconocido: no queremos mandar los detalles al cliente
  else {
    //1) Log error
    console.error('ERROR', err);
    //2)
    res.status(500).json({
      status: 'error',
      message: 'Algo salio muy mal!',
    });
  }
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    console.log(error);
    if (err.name === 'CastError') {
      error = handleCastErrorDB(error);
    } //Tiene el nombre de CastError este tipo de error de mongoose
    sendErrorProd(error, res);
  }
};


En la linea 63 se ve que tipo de error es (CastError) es un tipo de error de mongoose que lo capturamos y ejecutamos la funcion handleCastErrorDB crenado una nueva class AppError 

--------------------------------------
NOMBRES DUPLICADOS
--------------------------------------
const handleDuplicateFieldsDB = (err) => {
  const value = err.keyValue.name;
  const message = `Campo duplicado:${value} por favor use otro nombre`;
  return new AppError(message, 400);
};


if (err.code === 11000) error = handleDuplicateFieldsDB(error); //Para error duplicado

--------------------------------------
ERRORES POR VALIDACION
--------------------------------------
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.properties.message); //Hacemos un loop del error object para eso se usa Object.values
  const message = `Invalid Input data ${errors.join(', ')}`;
  return new AppError(message, 400);
};


if (err.name === 'ValidationError') error = handleValidationErrorDB(error);