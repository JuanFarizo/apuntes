----UPDATE USER DATA NO PASSWORD---

-------------------------------
EN LA RUTA 
-------------------------------
router.patch('/updateMe', authController.protect, userController.updateMe);

-------------------------------
EN EL CONTROLLER userController.js
-------------------------------
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    //Hacemos un loop a traves de todos los campos que hay en el objeto, ver si es uno de los permitidos (allowedFields),
    if (allowedFields.includes(el)) newObj[el] = obj[el]; //creamos un nuevo field en el object con ese mismo nombre con el mismo valor que en objeto original
  }); // Object.keys(obj) forma facil de hacer un loop a traves de un objeto en js. Devuelve un array que contiene todos los keynames
  return newObj;
};



exports.updateMe = catchAsync(async (req, res, next) => {
  //1. Generar un error si el usuario POSTs password
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'Esta ruta no es para actualizar el password use la correcta'
      ),
      400
    );
  }
  //2. Sino solo update user document
  //2.b Filtramos los nombres de los campos que no queremos que sean updateados
  const filterBody = filterObj(req.body, 'name', 'email'); //Ponemos los campos que deseamos conservar
  const user = await User.findByIdAndUpdate(req.user.id, filterBody, {
    //debemos filtrar el body por medidas de seguridad, ya que podria sino el usuario otorgase un rol de admin
    new: true,
    runValidators: false,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

-------------------------------
EN EL MODELO 
-------------------------------