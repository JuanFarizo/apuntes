Spread Operator:
	Permite expandir arrays y otras expresiones en donde multiples parametros o elementos son esperados
	
Solo funciona en argumento de funciones o en arreglos literales.

...args


	const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
	let arr2;

	arr2 = [...arr1]; //Me copia el arr1 dentro del arr2
	
	console.log(arr2); // [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]