Funciones aplicadas a STRINGS:
	En JavaScript hay dos tipos de string:
		Primitivos: const Mensaje = "Hola";
		Objetos: const StringObj = new String ("Hola");



unString.length: retorna la cantidad de caracteres de un String. O de elementos de un array.
---------------------------------------------------------
unString.indexOf('unaCadena'): este método retorna:
La posición del caracter en el array
-1 en caso de que no exista el caracter en el array
---------------------------------------------------------
unString.slice(8, 18): recibe dos parametros 1. parámetro es donde deseo que comience 2. Hasta donde.
---------------------------------------------------------
unString.trim(): Elimina los espacios al comienzo y al final del string
---------------------------------------------------------
unString.split('breaking'): retorna en un array lo que encuentra hasta que se topa con el parámetro que le pasamos. Toma como parametro el valor de corte.
---------------------------------------------------------
unString.match(/world/g): busca dentro un string una cadena que coincida con la expresion regular suministrada y retorna ese matcheo como un array.
---------------------------------------------------------
unString.replace('Bad', 'Good'): reemplaza una parte de la cadena de texto dentro de un string. Recibe dos parametros 1. El string a buscar 2. El string a reemplazar 
---------------------------------------------------------
unNumeroOArray.toString(): dado un numero o aray retorna el valor absoluto en formato String.