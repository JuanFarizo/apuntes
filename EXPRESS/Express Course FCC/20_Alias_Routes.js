--------ALIAS----------
Por ejemplo un alias a los 5 tours mas baratos y mejor puntuados la query seria :
			?limit=5&sort=price,-ratingsAverage


1) en tourRoutes.js  creamos una nueva ruta

	router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours); // Debemos correr un middleware (aliasTopTours) antes que se ejecute getAllTours de manera que el middleware manipule el query object.

Cuando se ingresa a esa ruta se ejecuta el middleware llevando al control a tourController aliasTopTours


2) En tourController.js:
	exports.aliasTopTours = (req, res, next) => {
	  req.query.limit = '5';
	  req.query.sort = 'price,-ratingsAverage';
	  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
	  next();
	};

	Lo que hacemos es el prellenado de los campos que van a servir a la query que se va a ejecutar una vez que el control pase del middleware a getAllTours y va a ser como si el usuario haya ingresado:
	
	http://127.0.0.1:3000/api/v1/tours?limit=5&sort=price,-ratingsAverage