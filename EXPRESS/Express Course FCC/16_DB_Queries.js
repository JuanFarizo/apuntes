----QUERY STRING FROM THE URL-------

req.query: nos da un objeto proveniente del query string.

find(): Devuelve un objeto que es un query.
https://mongoosejs.com/docs/api/query.html



Hay dos formas de escribir queries:
	1) Usando filter object:
			const tours = await Tour.find({
				duration: 5,
				difficulty: 'easy'
			});


	2) Usar Mongoose Methods //PODEMOS ENCADENAR TODOS LOS METODOS DE Query.Protype.method()
			const tours = await Tour.find()
			.where('duration').equals(5)
			.where('difficulty').equals('easy');


-----------------------------------------------------
Parametro page del query string se usa para paginacion. Lo que se hace es excluir este query string antes de hacer el filtro

	const queryObj = { ...req.query }; //CREA UNA COPIA DEL QUERY OBJECT
    const excludedFields = ['page', 'sort', 'limit', 'fields']; //que campos queremos excluir
    excludedFields.forEach(el => delete queryObj[el]);







    -----------------------------------------------------

    //CONSTRUIMOS LA QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //EJECUTAMOS LA QUERY
    const query = Tour.find(queryObj);
    const tours = await query;

    ---------------------------------------------------
    QUERYS CON OPERADORES AVANZADOS <= < > >=

    Name 	Description
$eq 	Matches values that are equal to a specified value.
$gt 	Matches values that are greater than a specified value.
$gte 	Matches values that are greater than or equal to a specified value.
$in 	Matches any of the values specified in an array.
$lt 	Matches values that are less than a specified value.
$lte 	Matches values that are less than or equal to a specified value.
$ne 	Matches all values that are not equal to a specified value.
$nin 	Matches none of the values specified in an array.


En el query string se ponen con brakets difficulty[gte]=5

Es un standar: http://127.0.0.1:3000/api/v1/tours?difficulty=easy&price[gt]=1000


//CONSTRUIMOS LA QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //ADVANCE FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`); //Expresion regular
    queryStr = JSON.parse(queryStr);

    //EJECUTAMOS LA QUERY
    const query = Tour.find(queryStr);
    const tours = await query;

