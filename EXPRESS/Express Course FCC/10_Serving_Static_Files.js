-----SERVING STATIC FILES-----

Debemos utilizar un middleware para poder servir achivos estaticos:

	app.use(express(`${__dirname}/public`));


	Si la URL ingresada no matchea con alguna de las definidas entonecs la aplicaciones se fija en public si hay un recurso con dicho nombre.