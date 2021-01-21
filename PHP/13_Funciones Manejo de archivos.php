Manejo de archivos PHP

file_put_contents($archivo, $persona, FILE_APPEND): Envia el string completo que va a escribirse en el texto. Borra todo lo que habia antes y escribe el string nuevo.

El parametro FILE_APPEND hace que no se borre todo, sino que agregue el contenido.

file_get_contents: Recupera el string completo con todo el contenido.


<?php 
$autos = [
0 => [
    "marca" => "Ford",
    "modelo" => "Fiesta",
    "patente" => "ABC123"
],
1 => [
        "marca" => "Ford",
        "modelo" => "Fiesta",
        "patente" => "ABC123"
],
2=> [
    "marca" => "Ford",
    "modelo" => "Fiesta",
    "patente" => "ABC123"
    ]
];

$json = json_encode($autos); //Transforma el array a un string de json

file_put_contents("autos.json", $json); //Guarda el json en un archivo .json

$archivo = file_get_contents("autos.json"); //Toma del archivo .json el string de json y lo guardo en una variable

$autosDos = json_decode($archivo, true); //Toma el string de json y lo transforma a un array asociativo como teniamos en $autos lo guarda en una variable
										//Usa el parametro true ya que sino devolveria objetos
?> 

Array asociativo --> String Json --> Guardar el string json en un archivo .Json
$autos 				 json_encode		file_put_contents

Cargar del .JSON el string json --> Array  asociativo
file_get_contents					json_decode



<?php
$fichero = 'gente.txt';
// La nueva persona a añdir al fichero
$persona = "John Smith\n";
// Escribir los contenidos en el fichero,
// usando la bandera FILE_APPEND para añadir el contenido al final del fichero
// y la bandera LOCK_EX para evitar que cualquiera escriba en el fichero al mismo tiempo
file_put_contents($fichero, $persona, FILE_APPEND | LOCK_EX);
?>

file_put_contents ( string $filename , mixed $data [, int $flags = 0 [, resource $context ]] ) : int

Si filename no existe, se crea el fichero. De otro modo, el fichero existente se sobrescribe, a menos que la bandera FILE_APPEND esté establecida.
filename: Ruta del fichero donde se escribe la información
data: La información a escribir. Puede ser tanto un recurso string, como array o stream.

flags
El valor de flags puede ser cualquier combinación de las siguientes banderas, unidas con el operador binario OR (|).

Banderas disponibles
Bandera	Descripción
FILE_USE_INCLUDE_PATH	Buscar filename en el directorio incluido. Véase include_path para más información.
FILE_APPEND	Si el fichero filename ya existe, añade la información al fichero en vez de sobrescribirlo.
LOCK_EX	Adquirir acceso exclusivo al fichero mientras se está ejecutando la escritura. En otras palabras, ocurre una llamada a flock() entre la llamada a fopen() y la llamada a fwrite(). Esto no es indéntico a una llamada a fopen() con el modo "x".