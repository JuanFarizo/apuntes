-------MONGODB DRIVERS------
Permite usar NodeJs con Mongodb:
	npm i mongoose

AHora en server.js:
	const mongoose = require('mongoose');

	const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
); //CREAMOS UNA VARIABLE Y REEMPLAZAMOS EL PASSWORD CON EL <PASSWORD>

mongoose
  .connect(DB, { //SE LE PASA EL STRING GUARDADO EN DB QUE TIENE TODOS LOS DATOS DE LA CONEXION Y LUEGO UN OBJETO DE LA CONFIGURACION Y MANEJO DE ERRORES
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })// ES UNA PROMESA POR LO QUE USAMOS .THEN
  .then((con) => {
    console.log(con.connections);
    console.log('DB CONNECTION EXITOSA');
  });

