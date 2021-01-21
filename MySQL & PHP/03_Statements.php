Statements 2 funciones:
Documentacion : https://www.php.net/manual/es/pdo.prepared-statements.php
Funcion PREPARE
Funcion EXECUTE

<?php 
 include ("pdo.php");
 
 $consulta = $db -> prepare("AQUI VA TODA LA CONSULTA SQL"); //DEFINIR
 $consulta -> execute(); 									//EJECUTAR
 
?>

El  $cualBaseDeDatos -> prepare ()            //Podemos tener abierta la conexion a mas de una base de dato por eso se debe especificar
EJEMPLO 

<?php 
function insertarMarca(PDO $db, $nombre) {
$consulta = $db -> prepare("INSERT INTO marcas values(null, '$nombre')"); //ATENTO A LAS COMILLAS DOBLES POR AFUERA SIMPLES POR DENTRO
$consulta -> execute();
}
?>
_________________________________________________________________________________

RECUPERAR DATOS (Sentencia SELECT)

Funcion PREPARE
Funcion EXECUTE
Funcion FETCHALL : devuelve un array con todas las filas del resultado del Select 
1 posicion por fila y c/u de estas posiciones es un array asociativo (usando la columna de la base de dato como clave) en el que c/ posicion es una columna de la db
	o
Funcion FETCH : trae la primera pelicula que sea resultado del Select y si se sigue ejecutando trae la siguiente hasta que cuando no hay mas arroja NULL

<?php 
 include ("pdo.php");
 
 $consulta = $db -> prepare("SELECT * FROM peliculas"); //DEFINIR
 $consulta -> execute(); 									//EJECUTAR
 $peliculas = $consulta -> fetchAll(PDO::FETCH_ASSOC);  //EL PARAMETRO HACE QUE SOLO MUESTRE LOS NOMBRES DE LOS CAMPOS Y NO LAS POSICIONES TAMBIEN

 foreach ($peliculas as $pelicuas) {
	 echo $pelicula['title']; echo <br>;
 }
?>


<?php 
 include ("pdo.php");
 
 $consulta = $db -> prepare("SELECT * FROM peliculas"); //DEFINIR
 $consulta -> execute(); 									//EJECUTAR
 $pelicula = $consulta -> fetch(PDO::FETCH_ASSOC);  //EL PARAMETRO HACE QUE SOLO MUESTRE LOS NOMBRES DE LOS CAMPOS Y NO LAS POSICIONES TAMBIEN

 while ($pelicula != null) {			//Este caso se recomienda cdo hay q trer muchos datos y puede ser pesado para PHP 
	 echo $pelicula['title']; echo <br>;
	  $pelicula = $consulta -> fetch(PDO::FETCH_ASSOC); 
 }
?>

EJEMPLO
<?php
function traerMarcaPorId(PDO $db, $id) {
$consulta = $db -> prepare ("SELECT * FROM marcas WHERE id = '$id'");
$consulta->execute();
return $consulta->fetch();
}
?>

<?php 
function buscarMarca(PDO $db) {
$a = "%" . $_get[buscador] . "%";
$consulta = $db -> prepare ("SELECT * FROM marcas WHERE nombre LIKE '%$_GET[buscador]%'  ");
$consulta->execute();
return $consulta->fetchAll();
}

?>










