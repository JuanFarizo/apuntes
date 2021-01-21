---------SORTING-----------
http://127.0.0.1:3000/api/v1/tours?sort=price
http://127.0.0.1:3000/api/v1/tours?sort=-price

Con el menos adelante hace la busqueda descendente

	let query = Tour.find(queryStr); //ES UN QUERY OBJECT
    const tours = await query;

    if (req.query.sort) {
      query = query.sort(req.query.sort); //AL SER Q OBJECT LE PODEMOS ENCADENAR MAS METODOS (LEER DOCUMENTAECIÓN)
    }

--------------------------------------------------
COMPLETO:
	//CONSTRUIMOS LA QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //ADVANCE FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`); //Expresion regular

    //EJECUTAMOS LA QUERY
    let query = Tour.find(JSON.parse(queryStr));
    const tours = await query;

    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }

----------------------------------------------------
SI QUEREMOS APLICAR UN SEGUNDO CRITERIO:

http://127.0.0.1:3000/api/v1/tours?sort=price,ratingsAverage

Debemos reemplazar la coma con un espacio ya que la query en mongoose seria:

				sort(price ratingsAverage)

if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt'); //AGREGAMOS UN ORDENAMIENTO POR DEFECTO EN CASO DE QUE NO SELECCIONE UNO EL USUARIO
    }

    const tours = await query;
