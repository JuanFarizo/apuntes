-------PARAM MIDDLEWARE--------

Que es: 
		Es un middleware que solo se ejecuta con ciertos parametros pasados en el url.
		Se coloca en routes, por lo que solo se ejecutara (se agregara al middleware stack) en esa ruta especifica ej. tourRoutes.js

		router.param('id', (req, res, next, val) => {
		  console.log(`Tour id: ${val}`);
		  next();
		});
        En este caso defino el middleware en la ruta

        o puedo definirlo en el controller y llamarlo:
        router.param('id', tourController.checkID);


		Si tengo el middleware en el controllador lo debo exportar

		exports.checkID = (req, res, next, val) => {
		  console.log(`Tour id: ${val}`);
		  if (val * 1 > tours.length) {
		    return res.status(404).json({
		      status: 'fail',
		      messagge: 'invalid ID',
		    });
		  }
		  next();
		};


El modelo que plantea Express es el de MIDDLEWARE STACK, por lo que es importante definir todos los middlewares que van a apilarse e ir ejecutando en orden de aparicion para poder asi cumplir con el modelo planteado.

----------CHAINING MULTPLE MIDDLEWARE FUNCTIONS--------

router.post(tourController.miMiddlewareEncadenado,tourController.createTour);

Para encadenar el middleware se pone antes del metodo al que llame en el controller. El miMiddlewareEncadenado se crea en el tourController.js


//EN EL CONTROLLER:

exports.checkBody = (req, res, next) => {
  console.log(req.body.price);
  if (!req.body.price || !req.body.name) {
    return res.status(404).json({
      status: 'fail',
      messagge: `Price: ${req.body.price} or name: ${req.body.name} is/are empty`,
    });
  }
  next();
};

//EN EL ROUTER

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);