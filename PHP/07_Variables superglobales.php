VARIABLES SUPERGLOBALES: Son las que define PHP, es decir que ya existen.
Existe en todos los archivos y adentro de todas las funciones.

$GLOBALS
$_SERVER
$_GET
$_POST
$_FILES
$_COOKIE
$_SESSION
$_REQUEST
$_ENV



$_GET: tiene los valores del query string. 
Es un array asociativo Ej.:
localhost/test.php?nombre=Jon&apellido=Snow&casa=Stark
$_GET Tendria el siguiente contenido:
[
 "nombre" => "Jon",
 "apellido" => "Snow",
 "casa" => "Stark"
]

$_GET["nombre"] tiene el valor "Jon"




