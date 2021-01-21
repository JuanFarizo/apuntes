----RESET PASSWORD - RESET TOKEN----

Para recuperar el pass hay dos pasos:
		1. Primero el usuario tiene que mandar una post request con el email 
		Luego creamos un random token y lo mandamos al email que indico el usuario
		2. Luego el usuario envia ese token desde su email para update the password 

------------------------------------------------
VER SEND EMAIL
------------------------------------------------
LA IDEA DE GENERAR UN RESET TOKEN DEL LADO DEL SERVIDOR ES POR SI LA DB ES COMPROMETIDA EL INTRUSO PARA CAMBIAR LOS PASSWORD DE LAS CUENTAS NECESITARA EL TOKEN PARA PODER HACERLO. FUNCIONA COMO UN PASSWORD PARA CAMBIAR EL PASSWORD. NUNCA PERO NUNCA DEBEMOS GUARDAR UN TOKEN DE FORMA PLANA EN LA BD
-------------------------------
EN LA RUTA 
-------------------------------
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword', authController.resetPassword);

-------------------------------
EN EL MODELO 
-------------------------------
const crypto = require('crypto'); //La usamos para generar un random reset token

Cambiamos el modelo agregando dos nuevos campos:
	  passwordResetToken: String,
  	  passwordResetExpires: Date,

  	  
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next(); //Si la propiedad password no fue modificada no la manipulamos o si es nuevo(recien creado)
  this.passwordChangedAt = Date.now();
  next();
});


userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    ); //Convierte la fecha a milisegundos como esta en JWTTimestamp y parseamos el numero utilizando la base 10
    return JWTTimestamp < changedTimestamp;
  }
  //falso significa que no cambio
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex'); //Generamos un randombyte de 32 y lo convertimos a string con el param hex
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex'); //Lo encriptamos
  console.log({ resetToken }, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; //El calculo es para agregar 10 minutos a la fecha de expiracion desde que pide el cambio de pass
  return resetToken;
};
-------------------------------
EN EL CONTROLLER 
-------------------------------
const email = require('./../utils/email'); 

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1. Encontrar el usuario basado en el POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('No hay un usuario con ese email'), 404);
  }

  //2.Generar un random reset token. Lo hacemos un un instance method
  const resetToke = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false }); //Desactiva todos los validadores especificados en el schema

  //3. Enviarlo al mail del usuario
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToke}`; //Enviamos el token de forma plano y luego lo comparamos

  const message = `Se olvido el password? Submit a PATCH request con tu password nuevo y confirme el password a: ${resetURL}.\nSi no olvido el password ignore este email`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Su password reset token (valido por 10 min)',
      message,
    });

    res.status(200).json({
      status: 'Success',
      message: 'Token send to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('Se produjo un error enviando el email pruebe mas tarde'),
      500
    );
  }
});
