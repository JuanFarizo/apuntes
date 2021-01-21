--IMPROVING PERFORMANCE IN MONGODB--
Indexes: Podemos crear indexes en un campo especifico de una coleccion. Por defaul mongo crea un index en el campo ID

Si no se implementan los index, Mongo tiene que buscar en cada documento, uno por uno, cada vez que se realiza una query-

En tourModel.js debajo de la declaracion del Schema:
	
	tourSchema.index({ price: 1 }); //Significa que ordena el precio de forma ascendente, -1 es descendente


Si aplicamos el metodo explain() al final de la query mongo nos arroja informacion: 

	const doc = await features.query.explain();	

------------------------------------------------------
Cuando realizamos una query y la combinamos con otro campo, es mas eficiente crear un "Compound index", uno con dos campos y no uno:

	tourSchema.index({ price: 1, ratingsAverage: -1 }); //Compound index
	No tenemos que crear uno individual si es que realizamos el Compound ya que asi hagamos la query de forma individual ya estan ordenados y es igual de eficiente que si realizamos uno individual

------------------------------------------------------
Cuales campos indexar?
Tenemos que ver cuales son nuestras necesidades, los campos a indexar van a ser aquellos sobre los parametros que las query mas se apliquen.

Esto es porque los index utilizan recursos, cual? -> Almacenamiento- La BD plana puede pesar 14kb pero con index puede llegar a 72kb, es decir 5 veces mas de su peso original-.- 

****SI TENEMOS UNA COLECCION CON UN ALTO RATIO DE WRITE/READ, ES DECIR UNA COLECCION QUE ES MAS ESCRITA QUE LEIDA, NO TIENE SENTIDO APLICAR INDEX**** Ya que tener actualizada el index en memoria es un recurso muy alto por el beneficio que representa 