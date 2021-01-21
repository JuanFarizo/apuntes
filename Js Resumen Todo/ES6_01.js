ES6 - JavaScript
Es un estandar adoptado a partir del 2015 en el que se acepto universalmente el arrow function - let - var - const, modularizacion, etc.

Uso de var: 
	Tiene scope global - function
	Puede ser sobreescrita si se vuelve a declarar
	
Uso de let: 
	Tiene scope local - function
	No se puede sobreescribir dentro de su scope

Uso de const:
	Es una variable read-only
	Solo puede "mutar"
	Se las declara en mayuscula const MI_MASCOTA = "no tengo"


 Objects (including arrays and functions) son mutables aunque se hayan declarado con const: El const previene de que se reasignar la variable.
	const s = [5, 6, 7];
	s = [1, 2, 3]; // throws error, trying to assign a const
	s[2] = 45; // works just as it would with an array declared with var or let	
	
	
Para prevenir que la data mutation Js provee de una funcion llamada Object.freeze(elObjeto):
	let obj = {
	  name:"FreeCodeCamp",
	  review:"Awesome"
	};
	Object.freeze(obj);
	obj.review = "bad"; // will be ignored. Mutation not allowed
	