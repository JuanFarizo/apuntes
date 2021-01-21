MANEJO DE ERRORES

Estructura TRY / CATCH : Gestiona errores de PHP

try {
	//Codigo a probar
}
catch (Exception $e) {       	La variable $e representa el error que tuvimos para obtenerlo usamos una funcion
	//En caso de error...
}
	$e -> getMessage();

-* MINIMIZAR EL CODIGO DENTRO DEL TRY *-

<?php 
	
	$dsn = 'mysql:host=127.0.0.1;dbname=testdb;port=3306',;
	$db_user = 'root';
	$db_password = 'root';
	
	
	try {
		$db = new PDO ($dsn, $db_user, $db_password, $opt);
		$db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //SI LA BASE DE DATOS TIENE ERRORES NOS AVISARA
	}
	catch (\Exception $e) {
		echo  "hubo un error"; exit;
	}
	echo "Bienvenidos a la base de datos";

?>

UNA PRACTICA HABITUAL ES EN CASO DE HABER UN ERROR A LA BASE DE DATO MANDAR UN MAIL AL DESARROLLADOR INFORMANDO DEL PROBLEMA

Funcion de conexion a base de dato:

<?php 
function abrirBaseDeDatos($dsn, $user, $pass) {
try {
  $db = new PDO ($dsn, $user, $pass);
  $db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (\Exception $e){
  return false; exit;
}
  return $db;
}

?>