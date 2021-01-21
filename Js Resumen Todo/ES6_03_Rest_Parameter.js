Rest Parameter: 
Podemos crear funciones que tomen una cantidad variable de argumentos. Esos argumentos se almacenan en un array que luego puede ser accedido dentro de la funcion.

funcion muchos(...args) {
	return "pasaste: " + args.length + " cantidad de argumentos";
}

Allows us to apply map(), filter() and reduce() on the parameters array.


