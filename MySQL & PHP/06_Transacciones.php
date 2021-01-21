Transacciones : garantiza que cualquier trabajo llevado a cabo en una transaccion, inclusive si se hace por etapas, sea aplicado a la base de datos de forma segura, sin interferencias de otras conexiones, cuando sea consignado.
Ayudan a cumplir con (ACID):
- Atomicidad 
- Consistencia
- Aislamiento
- Durabilidad

Una transaccion se implementa en dos pasos:
1_ beginTransaction
2_ commit or rollBack

Hasta que no se ejecute el commit las  consultas SQL no impactan en la base de datos.
rollBack se ejecuta cuando busco que las consultas acumuladas se descarten.

<?php 
	$db = new PDO ($dsn, $db_user, $db_password, $opt);
	$db -> beginTransaction(); // Desactiva el modo auto-commit
	
	//codigo a ejectura en la base de datos
	$stmt = $db -> exec ("DELET FROM movies WHERE title = 'Avatar'");
	
	$db -> commit();
?>

<?php 
	 include ("pdo.php");
	 
	 try {
	$baseDeDatos -> startTransaction(); // Anunciamos el inicio de una transaccion
	$consulta = $baseDeDatos -> exec("INSERT..");//Realizamos 4 consultas
	$consulta = $baseDeDatos -> exec("INSERT..");
	$consulta = $baseDeDatos -> exec("INSERT..");
	$consulta = $baseDeDatos -> exec("INSERT..");
	
	$baseDeDatos -> commit(); //Si todo sale bien impacta en la base de datos
		 
	 }
	 catch (\Exception $e) {
		 $baseDeDatos -> rollback(); // Caso contrario se hace un rollback
	 }
?>