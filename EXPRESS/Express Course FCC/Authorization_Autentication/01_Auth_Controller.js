-----Auth Controller-----

-------------------------------
AGREGAR LA RUTA CON SUS METODOS
-------------------------------

const authController = require('./../controllers/authController');

router.post('/signup', authController.signup);

En authController.js: 

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync'); //Al igual que en tourController utilizamos el catchAsync ya que la promesa debe estar envuelta en un try/catch

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  }); //Generamos una promesa por lo que usamos el await

  es.status(200).json({
    status: 'Success',
    user: newUser,
  });
});

-------------------------------
AUTHENTICATION WITH JWT
-------------------------------
JWT: JSON WEB TOKEN

Stateless solution for authentication, significa que no se necesita almacenar ninguna session state en el server. Es perfecto para restfull APIs (siempre deben ser Stateless).

Cómo funciona:
	1. El Client hace un Post request con email y password
	2. El Server chequea los datos y crea un unique JWT (un secret string que se almacena en el server)
	3. El Server manda al Client el JWT que lo almacena como cookie or localstorage
	4. Cuando un Client quiere acceder a una parte protegida hace el request y envia el JWT con ella 
	5. El Server verifica que el JWT sea valido y otorga acceso

Todo este intercambio debe pasar por HTTPS para que no se tenga acceso al password o JWT

Instalar JWt:
	npm i jsonwebtoken

https://www.npmjs.com/package/jsonwebtoken

el JWT_SECRET se recomienda que se ponga en el config.env y que tenga una longitud de 32 caracateres.

-------------------------------
LOGGIN USER DESPUES DE REGISTRARSE
-------------------------------
const jwt = require('jsonwebtoken');


const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  }); //Creamos un token, le pasamos el secret y una fecha de expiracion en la cual no sera mas valido
  res.status(200).json({
    status: 'Success',
    token, //Al pasar el token el user ya puede quedar logueado en la app 
    data: {
      user: newUser,
    },
  });

---------------------------------------
CREAMOS UNA FUNCION PARA GENERAR EL TOKEN
---------------------------------------
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
-------------------------------
LOGGIN PASANDO PASSWORD E EMAIL
-------------------------------
EL CONCEPTO DE LOGUEAR UN USUARIO SIGNIFICA FIRMAR JWT Y ENVIARLO AL CLIENT

SOLO LO ENVIAMOS SI EL USUARIO EXISTE Y EL PASSWORD ES CORERCTO

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //1. checkeamos si email y password existe
  if (!email || !password) {
    return next(new AppError('Por favor ingrese mail/password', 400));
  }
  //2. Check if user exists &&  password is correct
  const user = await User.findOne({ email }).select('+password'); // El campo es llamado email al igual que la variable en ES6 equivale a decir email: email
  //CUANDO QUEREMOS UN CAMPO QUE ES SELECT:FALSE COMO PASSWORD HAY QUE USAR EL MAS +

  //PARA COMPARAR LOS PASSWORDS DEBEMOS ENCRIPTAR EL QUE INGRESA EL USUARIO Y COMPARARLO CON EL YA ENCRIPTADO EN LA DB se hace en el modelo
  //await user.correctPassword(password, user.password)

  //3. Si todo esta bien enviamos el token to the client
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('password o email incorrecto', 401));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});

**********************************************
PARA COMPARAR PASSWORD LO HACEMOS EN EL MODEL CREANDO UN ISNTANCE METHOD QUE VA A ESTAR DISPONIBLE EN TODOS LOS DOCUMENTOS DE CIERTA COLECCION

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassowrd
) {
  return await bcrypt.compare(candidatePassword, userPassowrd); //bcrypt tiene un metodo llamado compare para comparar el password plano con el hasheado
  //this Apunta al documento actual pero al estar el select:false en password no tenemos acceso
};