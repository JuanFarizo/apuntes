----ADDING MISSING AUTHENTICATION AND AUTHORIZATION----
Como authentication y authorization estan siempre definidos en la declaracion de las rutas:

authentication: significa que el usuario este logueado.
authorization: que tenga los permisos requeridos para ejecutar la operacion.

En tourRoutes.js debemos especificar cuales son las url que necesitan estar authentication mediante el authController.protect y cuales deben tambien estar authorization mediante authController.restrictTo:

		router
	  .route('/:id')
	  .get(tourController.getTour)
	  .patch(
	    authController.protect,
	    authController.restrictTo('admin', 'lead-guide'),
	    tourController.updateTour
	  )
	  .delete(
	    authController.protect,
	    authController.restrictTo('admin', 'lead-guide'),
	    tourController.deleteTour
	  );
Este es un ejemplo, lo mismo aplica para las otras rutas.
---------------------------------------------------------
---------------------------------------------------------

En userRoutes.js podemos aplicar un middleware para todas las rutas. Siempre vamos a necesitar que el usuario este authenticated:

		router.use(authController.protect);

**Los middlewares corren en secuencia, todo lo que este debajo de ese middleware va a requerir authentication, osea que el usuario este logueado**

Por lo antes dicho podemos remover todos los authController.protect de las rutas declaradas ya que antepusimos ese middleware a todas

		router.post('/signup', authController.signup);
		router.post('/login', authController.login);
		router.post('/forgotPassword', authController.forgotPassword);
		router.patch('/resetPassword/:token', authController.resetPassword);

		//Protege todas las rutas por debajo de esta linea de codigo
		router.use(authController.protect); //Genralizamos el middleware authControoler.protect para todas las rutas que esten por debajo de esta linea de codigo.

		router.patch('/updateMyPassword', authController.updatePassword);
		router.get('/me', userController.getMe, userController.getUser);
		router.patch('/updateMe', userController.updateMe);
		router.delete('/deleteMe', userController.deleteMe); // Aunque no lo eliminamos de la BD esta bien usar delete de todas formas

		router.use(authController.restrictTo('admin'));

		router
		  .route('/')
		  .get(userController.getAllUserss)
		  .post(userController.createUser);
		router
		  .route('/:id')
		  .get(userController.getUser)
		  .patch(userController.updateUser)
		  .delete(userController.deleteUser);

		module.exports = router;