---------ERROR HANDLING-------

2 Tipos de errores:
	1. Operational Errors:
		Problemas que podemos predecir y sucederan en algun punto y los deberemos manejar de alguna forma. Ej Request timeout, Invalid path accessed, invalid user input, etc
		Express viene con un Error Handling Middleware ya incorporado

	2. Programming Errors:
		Bugos que los developers introducen en el codigo.

-----------------------------------------
ERROR CLASS
-----------------------------------------
En la carpeta utils creamos:
	appError.js

		class AppError extends Error {
  	//AppError hereda de Error
 	constructor(message, statusCode) {
    //El metodo constructor es llamado cada vez que creamos una instancia de la clase
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; //Si el statusCode comienza con 4 manda fail sino error
    this.isOperational = true; //Ahora todos los errores tienen esta propiedad en true

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;

Hay un stack de errores que maneja express, lo que hacemos es incorporar nuestro error proveniente de la clase a esa pila de errores.
	Error.captureStackTrace(this, this.constructor);

-----------------------------------------
Debemos importarla en App.js

const appError = require('./utils/appError');

app.all('*', (req, res, next) => {
  next(
    new AppError(`No se pudo encontrar ${req.originalUrl} en el server`, 404)
  );
});


-----------------------------------------
REFACTORIZANDO
-----------------------------------------
Una opcion es crear en la carpeta controllers:
	errorController.js:

	module.exports = (err, req, res, next) => {
  //   console.log(err.stack);
  err.statusCode = err.StatusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};



En App.js:
	const globalErrorHandler = require('./controllers/errorController');

	app.use(globalErrorHandler);


----------------------------------------
ERROR DURING DEVELOPMENT VS PRODUCTION
----------------------------------------
LOS ERRORES QUE MOSTRAMOS EN DESARROLLO SON COMPLETOS PARA SABER DONDE SE ORIGINARON UTILES PARA EL DESARROLLADOR, EN CMABIO LOS DE PRODUCCION DEBEN SER ERRORES DESTINADOS A LOS USUARIOS

En errorController:

	const { stack } = require('../routes/tourRoutes');

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

HAY QUE TENER PRECAUCIÓN CON LOS ERRORES DE MONGOOSE YA QUE DEBEN SER TRATADOS, Y NO ESTAN MARCADOS COMO OPERACIONALES POR LO QUE NO PODREMOS UN MENSAJE SIGNIFICATIVO
