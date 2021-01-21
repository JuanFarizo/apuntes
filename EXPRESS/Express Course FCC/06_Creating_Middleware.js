-------CREATING MIDDLEWARE--------

app.use( (req, res, next) => {
	console.log('un Middleware');
	next(); //Es importante siempre llamar al next sino se quedara atascado
});

Si no se especifica la ruta el middleware va a aplicar a cada ruta.

Los middlewares que aparecen despues de un res.send no se ejecutan ya que se consider que el Respond-Request Cycle termino.


Se los suele definir antes del Route Handler (de forma mas global).

-------USING 3.rd PARTY MIDDLEWARE---------

npm i morgan

const morngan = require('morgan');

app.use(morgan('dev'));


**********************************************
SI QUEREMOS PASAR INFORMACION DE MIDDLEWARE A MIDDLEWARE LO HACEMOS MEDIANTE EL OBJETO REQ QUE LUEGO ESTARA DISPONIBLE EN EL PROXIMO MIDDLEWARE
**********************************************