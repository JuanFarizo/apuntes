---ERRORS FUERA DE EXPRES UNHANDLED REJECTIONS--

Un ejemplo de estos errores son los por ejemplo un timeout en la DB connection.

Tipo de error: UNHANDLED PROMISE REJECTION 

Cada vez que hay una unhandled rejection en la app el process object emitira un object llamado unhandled rejection y podemos suscribir a ese evento

En server.js:

	//START SERVER
	const port = process.env.PORT;
	const server = app.listen(port, () => {
	  //callback que se ejecuta apenas comienza a correr el server
	  console.log(`App running on port: ${port}`);
	  console.log(`${process.env.NODE_ENV}`);
	}); //Comienza el servidor

	//unhandled rejection
	process.on('unhandledRejection', (err) => { //Permite manejar todo los errores que ocuren en el codigo asynchronous
	  console.log(err.message);
	  server.close(() => {
	    //de esta forma le damos tiempo al server que termine las request pendientes y luego la app is kill
	    process.exit(1); //Se utiliza para hacer un shutdown de la app
	  });
	});



****ES OPCIONAL CRASHEAR LA APLICACION****