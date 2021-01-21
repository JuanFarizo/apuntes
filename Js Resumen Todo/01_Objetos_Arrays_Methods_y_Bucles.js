Object: Se lo define mediante {} Cada propiedad tiene un valor. Ej.

var miObjetoAuto = {
	marca: 'Fiat',
	kilometros: 350,
	duenios: ['Juan', 'Pedro'],
	arrancar: function () {  //PODEMOS GUARDAR FUNCIONES EN UNA VARIABLE
	return this.marca; //ACCEDEMOS A VARIABLES DEL OBJETO DENTRO DE LA FUNCION DEL OBJETO
	}
};



//NOTACION DE PUNTO PARA ACCEDER A LAS PROPIEDADES:
console.log(auto.marca);
console.log(auto.arrancar());

---------------------------------------------------------

//PARA RECORRER ARRAYS o Collecciones en HTML *FOR OF*
	var alumnos = ['Juan','Pedro','Maria'];
	for (var n of alumnos) {
		console.log(n);
	};

//PERMITE ITERAR ARRAYS * FOREACH* es un metodo que recibe como parametro una funcion y esta recibe el nombre del elemento del array.
	nombreDelArray.forEach(function (elementoParaTrabajar) {
		console.log(elementoParaTrabajar);
	});



//PARA RECORRER OBJETOS *FOR IN*
	for (var porp in miObjetoAuto) {
		console.log(prop);	//NOS TRAE LAS PROPIEDADES: MARCA KILOMEOTRS DUENIOS
		console.log(miAuto[prop]); //NOS TRAE LOS VALORES
	}

---------------------------------------------------------

//MAP: Devuelve un array nuevo con lo que hagamos dentro de la función. Map recibe un callback como parametro y devuelve el array nuevo
	var superheroes = ['SpiderMan', 'Hulk', 'Thor', 'IronMan'];

	var nuevoArraySH = superheroes.map(function(unSuperHeroe){
		return unSuperHeroe + ' es alumno de DH';
	})

console.log(nuevoArraySH);
El nuevo array quedaria: 
['SpiderMan es alumno de DH', 'Hulk es alumno de DH', 'Thor es alumno de DH', 'IronMan es alumno de DH']

---------------------------------------------------------

//FILTER: Devuelve un array con todos los elementos que cumplen la condicion implementada por el callback.
	var nuevoArraySH = superheroes.filter(function(unSuperHeroe){
		return unSuperHeroe != 'SpiderMan';
	})
El nuevo array queadria
nuevoArraySH = ['Hulk', 'Thor', 'IronMan'];

---------------------------------------------------------

//REDUCE: Devuelve un único dato, recibe un callback cuyo objetivo es retornar un solo valor. Se le pasa dos parámetros
- El acumulador
- Un elemento

var StrinDeSH = superheroes.reduce(function(acumulador, unSuperHeroe){
	return acumulador + ', ' + unSuperHeroe;
})

Devuelve un string: 'SpiderMan, Hulk, Thor, IronMan'

---------------------------------------------------------

//JOIN: une todos los elementos de un array en un string y devuelve ese string.
Podemos indicar como deseamos que sean separados los elementos.
var frutas = ['manzana', 'banana', 'naranja'];
var texto = frutas.join(', ');

---------------------------------------------------------

//FIND: devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada.
var coincide = frutas.find(function(fruta){
	return fruta === 'manzana';
})
















