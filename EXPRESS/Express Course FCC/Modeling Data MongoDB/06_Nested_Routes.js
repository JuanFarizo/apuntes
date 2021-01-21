-------NESTED ROUTES-------
En el caso de hacer un nuevo review, en el cual tenemos referenciados como hijos los tours y los usuarios, deberiamos obtener los datos tanto de tour como de usuario de forma automatica de los respectivos documentos.

Es comun realizarlo cuando hay una relacion padre-hijo entre recursos. 

En tourRoutes.js:
	router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restrictTo('users'),
    reviewController.createReview
  );




exports.createReview = catchAsync(async (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id; //req.user sale del protect middleware

  const newReview = await Review.create(req.body); //Lo que no esta en el Schema es ignorado

  res.status(201).json({
    status: 'Success',
    data: {
      review: newReview,
    },
  });
});

--------------------------------------------
MERGEPARAMS
--------------------------------------------
Se implementa para solucionar el problema de desorden al hacer las routas que estando en tourRoutes pertenece a reviews

1. Importamos reviewRoutes a tourRoutes
2. Determinamos una ruta que en caso de ser declarada de dicha forma utilice reviewRoutes

La cadena al entrar a POST .../tours/tourId/reviews quedaria:
	1ro en App:

	app.use('/api/v1/tours', tourRouter);



	2do en tourRoutes:

	router.use('/:tourId/reviews', reviewRouter); //router es un middleware, aplicamos use, una ruta y que use reviewRouter


	3ro en reviewRoutes habilitamos mergeParams: 
	
	const router = express.Router({ mergeParams: true });
 
 //POST /tours/tourId: Esta parte nos dirige al tourRoutes y por 2do nos redirige a reviewRouter
 	// /reviews al tener habilitado el mergeParams permite redireccionar la ruta de tours a reviews


--------------------------------------------
NESTED GET ENDPOINT
--------------------------------------------
// GET /tours/tourId/reviews

Tenemos acceso a tourId en reviewController lo que hacemos es SI EXISTE un tourId buscamos uno por id.


exports.getAllReviews = catchAsync(async (req, res, next) => {
  console.log(req.params.tourId);
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };

  const reviews = await Review.find(filter);
  res.json({
    status: 'Success',
    resultados: reviews.length,
    data: {
      reviews: reviews,
    },
  });
});