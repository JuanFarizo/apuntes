--------AGREGATION PIPELINE-----------
https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/

Es una funcionalidad de MONGODB

OPERADORES DE AREGASION:
https://docs.mongodb.com/manual/reference/operator/aggregation/

Tour.aggregate() permite manipular la data siguiendo una serie de pasos. Definimos los pasos pasando un array al metodo (stages)

El match stage es generalmente el stage preliminar, que prepara para los siguientes stages que vendran.

Group permite agrupar documentos usando acumuladores. Lo que debemos especificar es _id: null

$match:
	Filters the document stream to allow only matching documents to pass unmodified into the next pipeline stage. $match uses standard MongoDB queries. For each input document, outputs either one document (a match) or zero documents (no match).

$group:
 	Groups input documents by a specified identifier expression and applies the accumulator expression(s), if specified, to each group. Consumes all input documents and outputs one document per each distinct group. The output documents only contain the identifier field and, if specified, accumulated fields.


$unwind:
    Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.



 	exports.getTourStats = async (req, res) => {
	  try {
	    const stats = await Tour.aggregate([
	      {
	        $match: { ratingsAverage: { $gte: 4.5 } }, //Me va a traer todos los documentos que matcheen con esa condicion
	      },
	      {
	        //Esto es un stage
	        $group: {
	          _id: { $toUpper: '$difficulty' }, //Me los va a agrupar por ID difficulty en este caso y luego calcula todo los por ejemplo 3 de dificultad facil y va a calcular el promedio del precio en funcion de esos 3
	          num: { $sum: 1 },
	          numRatings: { $sum: '$ratingsQuantity' },
	          avgRating: { $avg: '$ratingsAverage' },
	          avgPrice: { $avg: '$price' },
	          minPrice: { $min: '$price' },
	          maxPrice: { $max: '$price' },
	        },
	      },
	      {
	        $sort: {
	          avgPrice: 1, //el 1 es de ascendente
	        },
	      },
	      {
	        //se peuden inclusive repetir stages
	        $match: { _id: { $ne: 'EASY' } }, //ne not equal: vamos a seleccionar todos los documentos que no son EASY
	      },
	    ]);
	    res.status(200).json({
	      status: 'success',
	      data: {
	        tour: { stats },
	      },
	    });
	  } catch (err) {
	    res.status(400).json({
	      status: 'fail',
	      messagge: err,
	    });
	  }
};


Unwind: Deconstruye el campo array del documento y la salida es un documento por cada elemento del array.


exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1; // *1 asi lo transformo a numero
    const plan = await Tour.aggregate([
      {
        $unwind: '$startDates',
      },
      {
        $match: {
          //SOLO LOS QUE MATCHEAN CON LA CONDICION DEL AÑO DPS DEL 01-01 Y ANTES DEL 31-12
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          //AGRUPA POR EL MES Y LOS CUENTA CUANTOS HAY EN numTourStarts
          _id: { $month: '$startDates' },
          numTourStarts: { $sum: 1 },
          tours: { $push: '$name' }, //Arma un array con los nombres de los tours
        },
      },
      {
        $addFields: { month: '$_id' }, //Agrega campos
      },
      {
        $project: {
          //Hace una proyecccion con 0 o 1 para quitar o mostrar campos.
          _id: 0,
        },
      },
      {
        $sort: { numTourStarts: -1 }, //Ordenamos por numTourStarts de forma ascendente o con -1 de forma descendente
      },
      {
        $limit: 6, //LImita la cantidad de documentos que se muestran
      },
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        results: plan.length,
        tour: { plan },
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      messagge: err,
    });
  }
};