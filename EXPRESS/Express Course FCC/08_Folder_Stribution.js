-----------FOLDER DISTRIBUTION-----------


1) Una carpeta para rutas:
				routes
						userRoutes.js
						tourRoutes.js

				En tourRoutes:
					const express = require('express');
					const router = express.Router();
					router.route('/').get(getAllUserss).post(createUser);
					router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

					module.exports = router;


2) Una carpeta para handlers (controllers):
				controllers:
							tourController.js
							userController.js

				Donde se exportan todas las funciones:
				exports.getAllUserss = (req, res) => {
				  res.status(200).json({
				    status: 'success',
				    message: 'Controlador no creado aun',
				  });
				};

				y en los archivos de ruta (userRoutes.js) el require:

				const userController = require('./../controllers/userController');

3) En el archivo App.js va todo lo relacionado con Express
				module.export = app;

4) En el archivo server.js es donde se inicia la aplicacion y es lo relacionado con el servidor (es el entry point):

				database configuration
				error handling
				enviroment variables



