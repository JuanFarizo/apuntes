---GEOSPATIAL AGGREGATION: CALCULATING DISTANCE---

Calculamos la distancia de un determinado punto con respecto a todos los tours en la coleccion.

En orden de hacer calculos siempre usamos aggregation pepeline

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    next(
      new AppError(
        'Por favor ingrese latitud and longitud in the format lat, lng'
      ),
      400
    );
  }
  //Aggregation pipeline
  const distances = await Tour.aggregate([
    //Pasamos un arreglo con todos los stages del pipeline
    {
      $geoNear: {
        //Siempre debe estar primero en la pipeline
        //Requiere que al menos uno de los campos contenga geospatial index. Ya lo tenemos de la geospatial query
        near: {
          //es el pundo desde el cual se calcula la distancia. Desde este punto al startLocation
          type: 'Point',
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier, //Asi lo pasamos de m a kms
      },
    },
    //Hacemos una proyeccion para seleccionar los campos que deseamos q aparezcan
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances,
    },
  });
});
