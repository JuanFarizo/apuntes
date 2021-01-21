Objetos en Js: 

var miPerro = {
	"nombre": "Rambo",
	edad: 5,  //Si es una sola palabra se puede poner sin comillas js lo pasa a string de todas formas.
	"cola flameantes": 2,
	"amigos": ["juan", "pedro"]
};

Los objetos posen propiedades -> nombre, edad, cola, amigos.

Tenemos dos formas de notacion:
	notacion . : elObjeto.laPropiedad -> Sirve para acceder al valor de las propiedades. Ej miPerro.nombre; //el valor es Rambo 
	notacion [] : Se utiliza si la propiedad tiene un espacio en su nombre. Ej miPerro["colas flameantes"]; //el valor es 2
	var prop = "nombre"; 
	miPerro[prop]; //nos devuelve Rambo
	
Si queremos agregar propiedades podemos usar . o [] :
	miPerro.ladra = "guau";
	miPerro["ladra"] = "guau";

Si queremos actualizar el valor de una propiedad :
	miPerro.nombre = "Super Rambo";
	miPerro.["nombre"] = "Super Rambo";
	
Eliminar propiedades de un objeto:
	delete miPerro.ladra;
	delete miPerro["ladra"];

Chequear si la propiedad de un objeto existe o no:
	miPerro.hasOwnProperty(propname) -> devuelve un true o false


Nested Objects - Objetos Anidados:	
	Es un array de objetos -> Se lo llama JSON
	
		var miMusica = [
		{
			"artista": "rambo",
			"instrumento": ["la metralleta", "el bazooka"]
		}
		];


Las subpropiedades de un objeto se pueden acceder encadenando la notacion . o []
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "staple

	
Los objetos pueden tener objetos anidados o arrays anidados, en el anterior es de objetos, este ej es de arrays:
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
























