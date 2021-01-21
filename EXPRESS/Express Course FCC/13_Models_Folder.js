------EXPRESS MODULES-------

Creamos una carpeta Models
	Dentro de la carpeta tenemos todos los archivos, uno por cada modelo:
		tourModel.js:

		const mongoose = require('mongoose');

		const tourSchema = new mongoose.Schema({
  name: {
    //ESTABLECEMOS SCHEMA TYPE OPTIONS
    type: String,
    required: [true, 'Un tour debe tener un nombre'], //EL PASAMOS EL ERRO STRING
    unique: [true, 'El nombre debe estar repetido'],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'El tour tiene que tener una duracion'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Debe tener un group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'Debe tener una dificultad'],
  },
  ratingsAverage: {
    type: Number,
    default: 3, //DEFAULT OPTIONS
  },
  ratingsQuantity: {
    type: Number,
    default: 0, //DEFAULT OPTIONS
  },
  price: {
    type: Number,
    required: [true, 'Un Tour debe tener precio'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true, // Corta los espacios en blanco al principio y final
    required: [true, 'El tour debe tener una descripcion'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'el tour debe tener una imagen']
  },
    images: [String], //CREA UN ARREGLO DE STRINGS
  	createAt: {
      type: Date,
      default: Date.now(), //TIMESTAMP
      select: false //NO SE VA A MOSTRAR CUANDO HAGAMOS UNA QUERY, LO MISMO PODEMOS HACER POR EJ PARA PASSWORDS
    }
  },{ // al crear el Schema se le pasa dos objetos, el primero corresponde a su definicion y este segundo que aparece debajo de este parrafo corresponde a las opciones.
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });

		const Tour = mongoose.model('Tour', tourSchema); //ES CONVENCION usar Tour con mayuscula

		module.exports = Tour; //Lo unico que exportamos del modelo es el modelo


En el server.js solo dejamos la conexion a la BD.

-----------VIRTUALIZACIÓN DE PROPIEDADES-------------

Son propiedades que podemos agregar en nuestro schema pero no van a ser persistentes 

tourSchema.virtual('elNombreDeLaPropiedad')


tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
}); //la propiedad virtual solo sera creada cada vez  que necesitemos data de la DB es un getter
//Se crea una funcion de callback y no un arrow function ya que necesitamos la keyword this que apunta al documento actual

durationWeeks no va a estar persistente en la base de datos pero estara disponible cada vez que hagamos un pedido a la BD usando este schema -> Hay que agregarla al Schema

No se le podrá aplicar metodos como find('durationWeeks') ya que no forma parte de la BD persistente. Y estos calculos no se realizan en el controlador ya que forman parte de la logica de negocio. Las buenas prácticas no lo recomiendan.