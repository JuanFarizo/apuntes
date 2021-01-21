-------CHILD REFERENCING-------
ESTE PROCESO TIENE DOS PASOS:
	1. Primero creamos una referencia a un modelo en el Schema. Asi se crea la relacion entre dos datasets
	2. Populate los campos, en este caso lo hacemos mediante un middleware que se ve al final o lo hacemos directamente en la query en el controller

En tourModel.js:
		guides: [
      {
        type: mongoose.Schema.ObjectId, //El typo es un objeto Schema de moongoose por id
        ref: 'User' //La referencia es user
      }
    ]

De esta manera estamos usando child referencing.

---------------------------------------------
PARA OBTENER LA DATA TENEMOS 2 MANERAS DE HACERLO:

1. Populating: Para tener acceso a la referencia tour guides cuando hacemos una query a un cierto tour
	SIEMPRE PASA EN UNA QUERY!! Entonces en tourController en el metodo getTour tenemos que populate la query:

exports.getTour = catchAsync(async (req, res, next) => {
  //Si queremos filtrar el populate creamos un objeto de opciones
  const tour = await Tour.findById(req.params.id).populate({
    path: 'guides',
    select: '-__v -passwordChangedAt', //Exceptuamos estos campos de que aparezcan al hacer la query
  }); //El schema tiene la referencia, y con este metodo populate con toda la informacion
  if (!tour) {
    return next(new AppError('No se encontro un tour con ese id', 404));
  }
  res.json({
    status: 'success',
    data: { tour },
  });
});


2. PARA NO TENER QUE COPIAR EL POPULATE, UTILIZAMOS UN QUERY MIDDLEWARE EN ORDEN DE POPULATE CADA VEZ QUE REALIZAMOS UNA QUERY DE FIND. En tourModel.js:
	
tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt', //Exceptuamos estos campos de que aparezcan al hacer la query
  });
  next();
});

