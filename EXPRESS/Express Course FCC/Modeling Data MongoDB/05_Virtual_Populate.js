------VIRTUAL POPULATE------
Si queremos obtener por ejemplo todos los reviews de un tour como la relacion padre hijo es review - tours tenemos 2 posibles soluciones:

	1. Hacer una query para reviews cada vez que realizamos una query para tours

	2. Hacer child referencing en tours -> Esta seria la mejor opcion en este caso. Entonces todo lo que tenemos que hacer el populate ese array, utilizando una herramienta que ofrece mongoose que es el Virtual Populate

Entonces en tourModel.js:
	foreignField: Es el nombre del campo en el otro modelo, el cual esta en el modelo referenciado, es decir en el modelo Review sacamos el campo tour (Es donde el id de tour es guardado).


tourSchema.virtual('reviews', {
  ref: 'Review',
  //Debemos especificar el campo foraneo y el campo local
  foreignField: 'tour',
  localField: '_id', //Va a coincidir con el id sacado de review del campo tour
});



LUEGO EN EL CONTROLADOR DEBEMOS HACER EL POPULATE Y ELEGIR EL CAMPO

exports.getTour = catchAsync(async (req, res, next) => {

  const tour = await Tour.findById(req.params.id).populate('reviews'); //Especificamos el campo reviews
  if (!tour) {
    return next(new AppError('No se encontro un tour con ese id', 404));
  }
  res.json({
    status: 'success',
    data: { tour },
  });
});

TENEMOS QUE TENER CUIDADO CON LA CANTIDAD DE POPULATE QUE VAN QUEDANDO ENCADENADOS Y NO REPETIR DATA

