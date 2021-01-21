---------------------------------
UNCAUGHT EXCEPTIONS
---------------------------------

Son todos los errores en el codigo pero no son manejados (handled) en ningun lugar se los llama uncaught exceptions 
**se pone al principio para que pueda atrapar los errores que se vayan a generar de alli hacia abajo**


process.on('uncaughtException', (err) => {
  console.log(err.message);
  server.close(() => {
    //de esta forma le damos tiempo al server que termine las request pendientes y luego la app is kill
    process.exit(1); //Se utiliza para hacer un shutdown de la app
  });
});
 

****ES OBLIGATORIO CRASHEAR LA APLICACION****


ES BUENA PRACTICA SIEMPRE MANEJAR LOS ERRORES EN DONDE SE OCACIONAN Y NO CONFIAR EN LAS UNHANDLED REJECTION CALLBACKS PARA HACERLO 