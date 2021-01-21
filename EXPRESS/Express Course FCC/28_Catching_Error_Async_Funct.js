------Catching Error Async Function------
Creamos una funcion y envolvemos todo el try{} y catch{} en esa funcion.

const catchAsync = (fn) => {
  //Como express no tiene acceso a req, res, next debemos devolver una funcion que sera asignada a createTour y llama luego a la funcion anonima
  return (req, res, next) => {
    fn(req, res, next).catch(next);//Devuelve una promesa, en este caso aplicamos el catch para cuando es rechazada como se ve a continuacion
  };
};

//El catch envia el error al middleware error handling que envia el error response

En tourController:
Para elimiar el try catch envolvemos la funcion async en la funcion que creamos. Esta funcion que creamos devolverá una funcion anonima que sera asignada a createTour. La funcion anonima es llamada apenas se usa createTour handler

exports.createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});

----------------------------------
REFACTORIZANDO
----------------------------------
En la carpeta utils creamos catchAsync.js y exportamos la funcion catchAsync.



en tourController importamos catchAsync y luego envolvemos la funcionalidad y eliminamos los try catch

const catchAsync = require('./../utils/catchAsync');
