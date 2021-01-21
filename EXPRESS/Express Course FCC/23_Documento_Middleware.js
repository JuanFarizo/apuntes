--------DOCUMENT MIDDLEWARE-------
Podemos usar Mongoose Middleware para relacionar dos eventos. 

Al igual que en express tenemos la funcion next() para llamar al proximo Middleware

Ej. Cada vez que un documento es guardado en la BD podemos ejecutar un función 	entre el commando de guardado es emitido y el guardado efectivo del documento 

Por eso se lo llama a los Mongoose Middleware PRE - POST HOOKS ya que se puede correr funciones antes od espues de cierto evento.

Hay 4 tipos de Middleware en Mongoose:
	1. Document: Actua durante el procesamiento del documento. Tenemos acceso al documento con la keyword this. Por lo que podemos acceder a la data antes de que sea almacenada en caso que hagamos un .pre('save', function() {})
	2. Query
	3. Aggregate
	4. Model Middleware


Slug: Es un String que podemos poner en la URL, usalemente basado en un string como el nombre.

	 npm i slugify


------------------------------------------------------
1. EL SAVE MIDDLEWARE SOLO FUNCIONA CON SAVE Y CREATE MONGOOSE METHOS
------------------------------------------------------

//DOCUMENT MIDDLEWARE
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true }); // Tenemos acceso al documento que esta siendo guardado
  next();
}); //Pre middleware el cual va a ejecutarse antes del evento que le indiquemos en este caso save

this.slug lo debemos agregar al schema ya que no es persistente si no lo hacemos.

//Segun la terminologia se llama pre y el hook es el save. Podemos tener tantos middlewares pre o post como deseemos.

tourSchema.pre('save', function (next) {
  console.log('Va a grabar el documento');
  next();
});

tourSchema.post('save', function (doc, next) {
  //no tenemos la keyword this por lo que tenemos que usar doc
  console.log(doc);
  next();
}); 

------------------------------------------------------
2. QUERY MIDDLEWARE: PRE FIND MIDDLEWARE
------------------------------------------------------
La diferencia con el middleware anterior que es que ahora la keyword this esta apuntando a la actual query y no al documento.

Al ser this un query podemos encadenar todos los metodos que tenemos disponibles para query object



// tourSchema.pre('find', function (next) { Si lo dejamos asi el findOne nos mostraria el tour secreto por lo que usamos una expresion regular que se ejecuta todo lo que comience con find
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } }); //En este caso todos los tours secretos se van a ocultar al hacer getAllTours por ejemplo
  next();
}); //Este metodo se va a ejecutar antes del Tour.find() que aparece en el getAllTours en el tourController const features = new APIFeatures(Tour.find(), req.query) const tours = await features.query;

-----------------------------------------------------
3. AGGREGATION MIDDLEWARE
-----------------------------------------------------
Nos permite agregar hooks antes o despues que una agregasión pase.
 En nuestro caso pasa en el metodo getTourStats.

//AGGREGATION MIDDLEWARE
	tourSchema.pre('aggregate', function (next) {
	  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } }); // Agregamos un $match stage con el no igual a scretTour true.
	  console.log(this.pipeline());
	  next();
	});