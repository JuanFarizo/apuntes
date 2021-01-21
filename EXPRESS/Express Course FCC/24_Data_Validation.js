---------DATA VALIDATION--------------
HAY LIBRERIAS DE NPM QUE SIRVEN PARA VALIDAR :
	https://github.com/validatorjs/validator.js?source=post_page---------------------------

	npm i validator



Validación: es chequear si lo que ingresaron estan en el formato adecuado de cada campo segun el schema y tambien si los valores ingresados fueron ingresados del required field.

Sanitización: es asegurar que la data innputada esta limpia y no contiene codigo malicioso dirigido a la DB o la App. Por lo que removemos todo los caracteres que no deseamos de la data ingresada.


Mongoose viene con herramientas de validación y se las define en el SchemaType:

https://mongoosejs.com/docs/validation.html

required: Se puede aplicar a todos los tipos de datos.

Para los String:
	maxlength: [40, 'A tour name must have menos o igual de 40 cuaracteres']
	maxlength: [10, 'A tour name must have mas o igual de 10 cuaracteres']
enum: Se enumeran las posibles inputs que acepta ese campo. Se le pasa un array.
	
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty debe ser: easy, medium or difficult',
      }

Para Numbers:
	min: [1, 'Rating deebe ser mas de 1.0']
    max: [5, 'Rating debe ser 5 o menos']




-------------------------------------------------------
NO OLVIDAR DE CUANDO REALIZAMOS EL METODO updateTour en el controller poner {
	new: true,
	runValidators: true //De esta forma cuando realizamos el update los validadores se vuelven a comprobar.
}
-------------------------------------------------------

-------------------------------------------------
CUSTOM VALIDATORS
-------------------------------------------------
Devuelven un true o false, el cual va a ser un error.

Ej que el precio de descuento sea menor al precio completo.

Debemos especificar un objeto para el SchemaType options y en el objeto especificar la propiedad validate y un callaback function. 

 priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price; //this Apunta al documento actual en NEW document creation (no para update).
        }, //ESPECIFICAMOS EL VALIDATE Y LA CALLABACKFUNCTION que tiene acceso a la variable ingresada por el usuario (en este caso el precio de descuento)
        meesage:
          'El precio ( {VALUE} ) de descuento debe ser menor que el precio completo',
      },
    },


---------------------------------------------------
USANDO npm i validator
https://github.com/validatorjs/validator.js?source=post_page---------------------------
---------------------------------------------------
const validator = require('validator');

//DEBEMOS USAR LA PROPIEDAD validate y anexamos la funcion de validator

 name: {
      //ESTABLECEMOS SCHEMA TYPE OPTIONS
      type: String,
      required: [true, 'Un tour debe tener un nombre'], //EL PASAMOS EL ERRO STRING
      unique: [true, 'El nombre debe estar repetido'],
      trim: true,
      maxlength: [40, 'No puede exceder los 40 o mas caracteres'],
      minlength: [10, 'Puede tener 10 o más caracteres'],
      validate: [validator.isAlpha, 'El nombre solo puede tener caracteres'], //validator es un objeto asique con punto llamamos al metodo que deseamos para validar segun la documentación y le pasamos un mensaje
    },
