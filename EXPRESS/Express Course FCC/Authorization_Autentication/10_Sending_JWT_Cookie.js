--------SENDING JWT VIA COOKIE------
En authController.js en el metodo de crear y enviar token createSendToken():

Para enviar una cookie la tenemos que atacar al response object (al res).

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id); //Generamos una promesa por lo que usamos el await
  //Creamos un token, le pasamos el secret y una fecha de expiracion en la cual no sera mas valido
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), //Creamos una fecha y a la hr actual le sumamos el tiempo de expiracion de la cookie del config.env
    secure: false, //La cookie solo se envia solo con HTTPS
    httpOnly: true, //La cookie no puede ser accedida o modificada de ningun modo por el browser
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions); //El nombre de la cookie, la data, y opciones {}

  return res.status(statusCode).json({
    status: 'Success',
    token, //Al pasar el token el user ya puede quedar logueado en la app
    data: {
      user: user,
    },
  });
};