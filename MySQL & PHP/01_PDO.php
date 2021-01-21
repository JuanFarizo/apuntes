PDO
Conexión a la base de datos, requisitos:
1_ IP SERVIDOR
2_ PUERTO
3_ NOMBRE BASE DE DATOS
4_ USUARIO
5_ CONTRASEÑA

Se realiza la conexión, se hacen todas las consultas que se deseen.
VARIABLES REQUERIDAS:
1_ USUARIO
2_ CONTRASEÑA
3_ DSN : string con formato determinado con los datos restantes de la conexión 

<?php 
	//ABRIR UNA CONEXION
	$db = new PDO(
		'mysql:host=127.0.0.1;dbname=testdb;port=3306',
		'username',
		'password'
	);

	o tambien
	
	$dsn = 'mysql:host=127.0.0.1;dbname=testdb;port=3306',;
	$db_user = 'root';
	$db_password = 'root';
	$opt = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
	$db = new PDO ($dsn, $db_user, $db_password, $opt);
?>

<?php 
	//CERRAR UNA CONEXION
	$dsn = 'mysql:host=127.0.0.1;dbname=testdb;port=3306',;
	$db_user = 'root';
	$db_password = 'root';
	$opt = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
	$db = new PDO ($dsn, $db_user, $db_password, $opt);
	
	$db = null;

?>