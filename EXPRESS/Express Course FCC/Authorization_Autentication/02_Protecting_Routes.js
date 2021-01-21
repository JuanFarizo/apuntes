----PROTECTING ROUTES JWT----
Usamos el web token para dar acceso a rutas protegidas 

En las rutas hay que verificar ANTES del handler por ejemplo antes de tourController.getAllTours si el usuario esta loggeado o no.

Para lo cual utilizamos un middleware que se ejecuta ANTES de los handlers
En  tourRoutes.js:
	router
	  .route('/')
	  .get(authController.protect, tourController.getAllTours)
	  .post(tourController.createTour);

--------------------------------------------------
Como settear headers en Postman para mandarlos con el request y como podemos tener acceso a esos headers en express

En express para tener acceso a los headers se utiliza:
			req.headers
--------------------------------------------------

En authController creamos la funcion middleware.

**Una práctica común es mandar el token usando http header con la request.**

const {promisify} = require('util');// Para usar promisify method



-------------------------------------------
MANJO DE ERRORES En errorController.js
-------------------------------------------


exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //1. Getting token and chequear si existe
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } //SE UTILIZA authorization como standar
  console.log(token);
  if (!token) {
    return next(new AppError('Debes estar logueado para poder ingresar', 401));
  }
  //2. Verificar el token. (ver si la signature es correcta) a. Si el token es correcto b. si expiro
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); //El callback se ejecuta apenas la verificacion es completada. Es una funcion asynchronous el verify

  //Con promisify transformamos la funcion que va a devolver una promesa *promisify(jwt.verify)*
  //3. Chequear si el usuario todavia existe
  const freshUser = await User.findById(decoded.id);
  console.log(currentUser);
  if (!currentUser) {
    return next(
      new AppError('El token que pertenece a este usuario no existe mas'),
      401
    );
  }
  //4. Chequear si el usuario cambio password despues  de que el token fue emitido
  //Para lo cual creamos otro instance method
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'Ha cambiado el password recientemente! por favor vuelvase a loguear'
      ),
      401
    );
  }

  //Si pasa las 4 verificaciones pasa al next al route handler
  req.user = currentUser;
  next();
});

**********************************************
SI QUEREMOS PASAR INFORMACION DE MIDDLEWARE A MIDDLEWARE LO HACEMOS MEDIANTE EL OBJETO REQ QUE LUEGO ESTARA DISPONIBLE EN EL PROXIMO MIDDLEWARE
**********************************************