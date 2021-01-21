Otros métodos utiles son:

Query: Solo funciona con consultas SELECT, reemplaza el uso de prepare + execute , quitando el beneficio de los statements y la seguridad.
<?php 
	$consulta = $db -> query ("SELECT * FROM movies");
		
	$peliculas = $consulta -> fetchAll();
?>

Exec: Al igual que query solo que trabaja con consultas que no sean select
<?php 
	$consulta = $db -> exec ("INSERT into movies....");
		
?>

lastInsertID(): devuelve el id del ultimo ID insertado, es un metodo asociado a la base de datos
<?php 
	$consulta = $db -> exec ("INSERT into movies....");
	$db -> lastInsertID(); // siempre posterior a un INSERT
?>

rowCount(): devuelve la cantidad de filas que obtiene un select como resultado
<?php 
	$consulta = $db -> prepare("SELECT * FROM movies");
		
	$consulta -> execute();
	
	$peliculas = $consulta -> rowCount();
}
?>
