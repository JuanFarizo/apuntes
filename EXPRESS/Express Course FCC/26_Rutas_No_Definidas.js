------------Handling Unhandle Routes-----------

En el archivo App.js , lo que hacemos es implementar un middleware seguido de:
	//3) LAS RUTAS

	app.all() // Se utiliza app.all() Para capturar cualquier tipo de peticion sea get post delet update patch, etc...

	app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    messagge: `No se pudo encontrar ${req.originalUrl} en el server`,
  });
  next();
});

