JSON: Formato particular para traducir datos en un string y recuperar desde el string todo los datos.

Datos en array <--> String en  JSON

Partimos de array asociativo, lo pasamos a string de JSON y luego para recuperar pasamos de String de JSON a array asociativo.

<?php 
{
	"empleado": [
	{"firstName":"Jhon","lastName":"Travolta"},
	{"firstName":"Anna","lastName":"Karenina"}
	]
}

- Para pasar un $arrayAsociativo a JSON se usa una funcion:

	$json = json_encode($arrayAsociativo);

- Para recuperar el array original:

$arrayOriginal = json_decode($json, true);  //Si no se declara el true devuelve objetos y no arrays asociativos

?>