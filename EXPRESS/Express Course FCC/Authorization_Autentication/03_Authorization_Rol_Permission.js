-----PERMISSION ROLES------
Autorizar: es ver si ciertos tipos de usuarios realizan determinadas acciones.

Dependiendo del rol es ver si tienen acceso a determinado recursos.


********NUEVAMENTE LO LOGRAMOS UTILIZANDO MIDDLEWARES*********
-------------------------------
EN EL MODELO 
-------------------------------
role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  }

-------------------------------
EN LA RUTA 
-------------------------------
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.deleteTour); //Con el restrictTo('admin') estamos limitando al rol siempre mediante middleware uno a continuacion del otro.

  Restringimos los roles que estan permitidos interactuar con ese recurso, en este caso deleteTour


-------------------------------
EN EL CONTROLLER 
-------------------------------
Como no podemos pasar argumentos dentro de una middleware function, pero debemos pasar los roles que tienen acceso a ese resource (en este caso el admin y el lead-guide) por lo que tenemos que crear una WRAPPER FUNCTION que luego RETORNA la MIDDLEWARE FUNCTION que deseamos crear.

exports.restrictTo = (...roles) => {
  //...roles crea un arreglo con todos los elementos que especificamos ['admin, 'lead-guide]
  return (req, res, next) => {
    //Retornamos una funcion -> la middleware
    //Esta funcion tiene acceso a roles parameter ya que es un closure
    if (!roles.includes(req.user.role)) {
      //Podemos acceder ya que guardamos req.user = CurrentUser en el middleware anterior
      return next(
        new AppError('No tienes permiso pera realizar esta accion'),
        403
      );
    }
    next();
  };
};


GRACIAS AL CLOUSRE TENEMOS ACCESO A ...ROLES