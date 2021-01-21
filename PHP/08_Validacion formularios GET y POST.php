Funcion isset() para validar si el dato existe:

<?php
if (isset($_GET["casa"])) {
echo "Soy de la casa " . $_GET["casa"];
}
?>

Funcion header() para redireccionar:
<?php 
if ($_POST) {
//validar
//registrar
//redirigir: Para esto se hace con la funcion header seguido de un exito para que no se lea codigo HTML
header("Location:pagina.php"); exit;	
}
?>

Persistencia de datos, se utiliza $_GET o $_POST para modificar el atributo value del imput
<input type='text' name='firstname' value=''>
<?php 
$nombre= "";
if($_POST) {
	$nombre = $_POST['nombre'];
}
?>

<input type='text' name='firstname' value='<?=$nombre?>'>


VALIDACION(DEL LADO DEL SERVIDOR): 
Se hace un IF por cada uno de los posibles errores.
PHP tiene funciones estandar para ayudar a validar estas son:
TRIM			COUNT
STRPOS			IS_ARRAY
STRSTR			IS_NULL
STRLEN			IS_....
STR_REPLACE		IN_ARRAY
FILTER_VAR		CHECKDATE
ISSET			IS_NUMERIC
				IS_INTEGER

<form class='' action='inicio.php' method='POST'> La informacion viaja a la misma URL que esta el formulario para poder validarla
Ej.
Formato en pseudocodigo:
if (hayErrorEnElCampo) {
	
}

<?php 
if ($_POST) {
	if (strlen($_POST['name'])==0) {
		echo "No llenaste el nombre <br>";
	}
	if (strlen($_POST['name'])<8) {
		echo "El username tiene que tener al menos 8 caracteres <br>";
	}
	if (is_numeric($_POST['edad'])==false) {
		echo "La edad debe ser numerica <br>";
	}
	 if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)==false) {
		echo "El mail no tiene el formato correcto  <br>";
    }
}
?>
