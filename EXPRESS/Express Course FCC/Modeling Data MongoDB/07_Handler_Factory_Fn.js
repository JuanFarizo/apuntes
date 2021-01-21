-------HADLER FACTORY FUNCTIONS - DELETE--------
HADLER FACTORY FUNCTIONS: Es una funcion que retorna otra funcion en este caso la handler function delete, se puede usar para creating, updating y reading resources tambien

Esto sucede gracias a los callbacks es una funcion dentro de otra que esta tiene acceso a las variables de la funcion de afuera, en este caso Model, inclusive despues de que la funcion de afuera haya retornado

1. Creamos en la carpeta controllers el archivo handlerFactory.js

En el vamos a escribir funciones que van a ser controladores, por ejemplo el delete que va a servir a todos los modelos que tengamos en la aplicacion.

	//Las funciones aqui escritas devuelven controllers
	const catchAsync = require('./../utils/catchAsync');
	const AppError = require('../utils/appError');

	exports.deleteOne = (Model) =>
	  catchAsync(async (req, res, next) => {
	    const doc = await Model.findByIdAndDelete(req.params.id);

	    if (!doc) {
	      return next(new AppError('No se encontro un documento con ese id', 404));
	    }
	    res.status(204).json({
	      status: 'success',
	      data: null,
	    });
	});


2. Importamos handlerFactory en tourController:

	const factory = require('./handlerFactory');


	exports.deleteTour = factory.deleteOne(Tour);

3. En caso de necesitar realizar algunas acciones antes de ejecutar todo el codigo implementado en handlerFactory podemos definir un middleware que ejecutara cierto codigo antes del por ejemplo createOne.

--------------------------------------------
FACTORY PARA GET
--------------------------------------------
Tenemos que tener cuidado con los populate. Podemos pasarlo como una opcion en la funcion getOne del handlerFactory
1. Creamos la query
2. Si hay un populate options object lo agregamos a la query y al final await esa  query

**UNA VEZ QUE LA QUERY ESTA LISTA HACEMOS EL AWAIT Y GUARDAMOS EN UNA VARIABLE **


En el handlerFactory.js: 

exports.getOne = (Model, popOptions) =>
  atchAsync(async (req, res, next) => {
    //Si queremos filtrar el populate creamos un objeto de opciones
    let query = Model.findById(req.params.id); //No hacemos await de la query inmediantamente
    if (pop) query = query.populate(popOptions); //Vemos si hay populate y si lo hay aplicamos el metodo con popOptions
    const doc = await query;

    if (!doc) {
      return next(new AppError('No se encontro un documento con ese id', 404));
    }
    res.json({
      status: 'success',
      data: doc,
    });
  });

En el tourController.js:
	exports.getTour = factory.getOne(Tour, { path: 'reviews' }); //El campo path es el que queremos populate y podemos especificar select

--------------------------------------------
FACTORY PARA GETALL
--------------------------------------------
Una vez que creamos getAll factory function, los tres recursos van a tener el API features 

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //Para permitir nested GET reviews en tour
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId }; //AGREGAMOS ESTA LINEA PARA PODER IMPLEMENTARLA EN reviewController que en nada afecta a getAll de tourController

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    res.json({
      status: 'success',
      results: doc.length,
      data: doc,
    });
  });
