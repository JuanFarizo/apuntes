-----/me/-------
Endpoint donde el usuario puede recuperar su informacion

1. El ID lo obtenemos del usuario ya logueado, no lo pasamos en la url. Para lo cual utilizamos un middleware.

		exports.getMe = (req, res, next) => {
		  req.params.id = req.user.id;
		  next();
		};

2. Implementamos ese middleware antes de getOne en userRoutes.js:
Ponemos el ID del usuario dentro de params.id, como si el id vendria de la url.

		router.get('/me', authController.protect,userController.getMe, userController.getUser);
	