---------MULTIPLE ROUTERS----------

app.use('/api/v1/tours', tourRouter);
const tourRouter = express.Router();
//tourRouter es un Middleware y lo usamos como tal
//Una vez que el middleware entra al stack espera su turno para ser ejecutado.

En vez de tener :
	app.route('/api/v1/tours').get(getAllTours).post(createTour);


Vamos a tener:
	app.tourRouter.route('/').get(getAllTours).post(createTour);

	app.tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

Esto es asi porque ya tourRouter esta apuntando a '/api/v1/tours' //segun la linea app.use('/api/v1/tours', tourRouter); 

Entonces al usar .route('/') estamos referenciando ya a '/api/v1/tours'


--------------------------------------

const tourRouter = express.Router();
app.use('/api/v1/tours', tourRouter);

const userRouter = express.Router();
app.use('/api/v1/users', userRouter);


tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUserss).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

-----------------------------------------
REST PHILOSOPHY:
	El nombre de la URL no tiene nada que ver con la acción que performa.
Salvo en casos especiales como algunos de user se puede no seguir al 100%
-----------------------------------------