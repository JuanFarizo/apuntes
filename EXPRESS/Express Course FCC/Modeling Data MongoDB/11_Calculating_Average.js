----CALCULATING AVERAGE RATIN ON TOURS----
Almacenar un resumen del conjunto de datos relacionados en el dataset principal es una tecnica popular en data modeling. Permite prevenir constantes querys de los data set relacionados 

Un ejemplo es almacenar el rating promedio y el numero de ratings en cada tour para que no tengamos que hacer un query de reviews y calcular el promedio cada vez que hagamos una query de todos los tours

1. Vamos a calcular el promedio
2. Vamos a calcular el numero de ratings de un tour cada vez que un nuevo review es agregado, y cada vez que un review es updated o deleted 

Lo vamos a hacer por medio de un middleware que va a llamar a la funcion que creamos en reviewModel.js cada vez que un review es creado o actualizado

*****************************
VAMOS A USAR STATICS METHODS ya que necesitamos llamar a la funcion aggregate en el modelo
*****************************
En reviewModel.js:  

		reviewSchema.statics.calcAverageRatings = async function (tourId) {
  //toma como parametro el id del tour
  const stats = await this.aggregate([
    //Usamos el pipeline
    {
      //Primero debemos seleccionar todos los reviews que pertenecen al tour pasado en el argumento
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 }, //Calculamos la cantidad de rating
        avgRating: { $avg: '$rating' }, //Calculamos el promedio
      },
    },
  ]);
 
  await Tour.findByIdAndUpdate(tourId, { //De esta forma persistimos los datos en la BD
    ratingsQuantity: stats[0].nRating,
    ratingsAverage: stats[0].avgRating,
  });

***LLAMAMOS A LA FUNCION LUEGO QUE EL REVIEW ES CREADO-POST-***

reviewSchema.post('save', function () {
  //this point to current review
  this.constructor.calcAverageRatings(this.tour); //Lo hacemos con el constructor ya que reamos Review posteriormente en la ejecucion del codigo
});

*****************************
PRE-MIDDLEWARE
*****************************
La meta es tener acceso al documento actual, this en este caso se refiere a la query actual, para tener acceso ejecutamos la query y tenemos acceso al documento procesado. hacemos .pre() porque de forma contraria no tendriamos acceso a la query

Para tener acceso al id pasamos data del pre middleware al post middleware 

//findByIdAndUpdate
//findByIdAndDelete
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne(); //Para pasar la variable de pre a post middleware creamos una propiedad
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});
