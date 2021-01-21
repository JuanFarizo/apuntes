-- Binding de Parametros--

Placeholders: se ponen con dos puntos y una etiqueta

Ej.:$consulta = $db -> prepare("INSERT into usuarios values (default, :nombre, :apellido, :email, null, null)");
	
	$consulta -> bindValue(":nombre", $nombre); //Va entre prepare y execute y se reemplaza el placeholder por un valor
	$consulta -> bindValue(":apellido", $apellido);
	$consulta -> bindValue(":email", $email);
	
	$consulta -> execute();
	
Ej.: 
<?php 
function buscarMarca(PDO $db) {
$stmt = $db -> prepare("SELECT * FROM marcas WHERE nombre LIKE :buscador ");
$stmt -> bindValue(":buscador", "%$_GET[buscador]%");
$stmt -> execute();
return $stmt -> fetchAll();
}
?>

_________________________________________________________________
Alternativa en la escritura de placeholders

<?php 
	$consulta = $db -> prepare("INSERT into usuarios values (default, :nombre, :apellido, :email, null, null)");
	
	$consulta -> bindValue("1", $nombre); //El numero corresponde al orden en que aparecen los signos de pregunta
	$consulta -> bindValue("2", $apellido);
	$consulta -> bindValue("3", $email);
	
	$consulta -> execute();
}
?>

_________________________________________________________________
Alternativa en la escritura de placeholders
Se puede escribir en el execute pasando un array
<?php 
:$consulta = $db -> prepare("INSERT into usuarios values (default, ? , ? , ?, null, null)");
	
	$consulta -> execute([
	":nombre" => $nombre,
	":apellido" => $apellido,
	":email" => $email
	]);
}
?>

<?php 
:$consulta = $db -> prepare("SELECT * FROM movies WHERE id = ? AND title = ?");
	
	$consulta -> execute([
	1, "Avatar"
	]);
}
?>