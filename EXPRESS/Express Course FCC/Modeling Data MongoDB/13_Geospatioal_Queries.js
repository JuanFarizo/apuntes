----GEOSPATIOL QUERIES FINDING----
Buscar tours a cierta distancia de un punto especifico.

en tourModel.js debemos hacer el index de manera que lo requiere mongodb en la documentacion:
	tourSchema.index({ startLocation: '2dsphere' }); //Le decimos que startLocation debe estar indexed a esfera 2D


en la tourRoutes.js:

	router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin); // es un estandar de especificar URL's que tienen muchas opciones.
// /tours-within/233/center/-40,45/unit/mi

En tourController.js:

// /tours-within/233/center/-40,45/unit/mi
	exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  if (!lat || !lng) {
    next(
      new AppError(
        'Por favor ingrese latitud and longitud in the format lat, lng'
      ),
      400
    );
  }
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1; //Dividimos la distancia por el radio de la tierra s/ este en km o en mi
  //Esta en radianes.
  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  }); //Especificamos el filterObject startLocation es donde inician los tours
  //Operador geoespacial $geoWithin especificamos un punto latlng y un radio (distance)
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours,
    },
  });
});


