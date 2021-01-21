--------MODEL-----------

En mongoose todo es sobre modelos, los modelos son como una huella que se usan para crear documents.

Creamos modelos en mongoos para poder:
	crear documents
	query documents
	update documents
	delete documents

Y para obtener un modelo necesitamos un Schema.

En el Schema:
	Describimos la data
	Establecemos valores por defecto
	Validamos la data
	Schema type options para algunos campos o para todos los campos


const tourSchema = new mongoose.Schema({
  name: {
    //ESTABLECEMOS SCHEMA TYPE OPTIONS
    type: String,
    required: [true, 'Un tour debe tener un nombre'], //EL PASAMOS EL ERRO STRING
    unique: [true, 'El nombre debe estar repetido'],
  },
  rating: {
    type: Number,
    default: 0.0, //DEFAULT OPTIONS
  },
  price: {
    type: Number,
    required: [true, 'Un Tour debe tener precio'],
  },
});

const Tour = mongoose.model('Tour', tourSchema); //ES CONVENCION usar Tour con mayuscula

Para crear un documento: Tenemos que crear un objeto a partir de una clase:

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

//PODEMOS APLICAR METODOS ESPECIFICOS DE MONGOOSE A testTour

testTour.save().then(); // el metodo save() devuelve una promesa que puede ser consumida (se hace de forma asyncronica) 

AL CREAR EL DOCUMENT si no tenemos la COLLECTION creada lo que hace es crear la collection con el nombre en plural del modelo utilizado