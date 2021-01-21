----USER DELETE ACC---

NO eliminamos el documento, simplemente ponemos la propiedad active a false.


-------------------------------
EN EL MODELO 
-------------------------------
active: {
    type: Boolean,
    default: true,
    select: false //Para no hacer visible la implementanción
  }

Para filtrar los usuarios activos de los inactivos utilizamos un query middleware -> Lo que hace es agregar un paso antes que otra query que hagamos en la aplicación

userSchema.pre(/^find/, function (next) {
  //this points to the current query
  this.find({ active: { $ne: false } }); //Agrega una precondicion a la query's que comiencen con find segun la expresion regular que se ve en la funcion
  next();
});


-------------------------------
EN LA RUTA 
-------------------------------
router.delete('/deleteMe', authController.protect, userController.deleteMe); // Aunque no lo eliminamos de la BD esta bien usar delete de todas formas

-------------------------------
EN EL CONTROLLER 
-------------------------------

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

------------------------------------
