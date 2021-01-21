Modeling Location --- Geospatiol Data:
	Es una descripcion de lugares en la tierra utilizando un sistema de coordenadas de longitud y latitud.

	Mongo DB utiliza un formato especial llamado GeoJSON

En tourModel.js:
	
	startLocation: {
      //Funciona como un objeto Embebido, Podemos especificar una serie de propiedades
      //GeoJSON. Para que sea reconocido como tal debemos especificar el type  y coordinates properties.
      type: {
        type: String,
        default: 'Point', //El por defecto es un punto, pero podemos especificar polingonos , lineas , etc
        enum: ['Point']
      },
      coordinates: [Number], //Un arreglo de puntos, primero se pone la longitud y luego la latitud.
      address: String,
      description: String
    },
  EJEMPLO:

  		"startLocation": {
      "description": "Miami, USA",
      "type": "Point",
      "coordinates": [-80.185942, 25.774772],
      "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
    },

  Debe tener al Menos el type como se lo definicio primero, y luego las coordinates, los demas fields son opcionales.

---------------------------------------------------------
  EMBEBER documents:
  	Se debe crear un arreglo de un field determinado y eso se lo hace utilizando []:

  		locations: [ //Se usa un arreglo de objetos.
      {
      type: {
        type: String,
        default: 'Point',
        enum: 'Point'
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number
    }
  ]
 
Como se puede observar las localizaciones tiene un arreglo de objetos con sus propios ID e informacion que se describio en el schema.

  "locations": [
      {
        "_id": "5c88fa8cf4afda39709c2959",
        "description": "Lummus Park Beach",
        "type": "Point",
        "coordinates": [-80.128473, 25.781842],
        "day": 1
      },
      {
        "_id": "5c88fa8cf4afda39709c2958",
        "description": "Islamorada",
        "type": "Point",
        "coordinates": [-80.647885, 24.909047],
        "day": 2
      },
      {
        "_id": "5c88fa8cf4afda39709c2957",
        "description": "Sombrero Beach",
        "type": "Point",
        "coordinates": [-81.0784, 24.707496],
        "day": 3
      },
      {
        "_id": "5c88fa8cf4afda39709c2956",
        "description": "West Key",
        "type": "Point",
        "coordinates": [-81.768719, 24.552242],
        "day": 5
      }
    ]