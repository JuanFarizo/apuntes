COOKIES

Desde php mandamos una instruccion para guardar información del lado del usuario.
Con esto podemos personalizar la web para el usuario.
Ej idioma, moneda, usuario logueado

Función: setcookie();
Variable superglobal: $_COOKIE

Utilizamos 2 archivos:
1 Para escribir la información (escribir.php)
2 Para acceder a la información (leer.php)
<?php
setcookie("idioma", "ES", time() + 60 * 60 * 24 * 30); //recibe 3 parametros 1) Que información estamos guardando
								//2) El valoro de la cookie
								//3) Cantidad de tiempo que queremos que dure la cookie en el sistema
setcookie("moneda", "AR", time() + 60 * 60 * 24 * 30); // La estamos guardando un mes asi

setcookie("moneda", "", -1); //Con esto borramos una cookie (1er parametro es el nombre, el 2do valor vacio y el tiempo -1
//Si no le asigno tiempo a la cookie o la pongo en 0 dura hasta que se cierre el navegador 
?>
 
Para leer
<?php 
var_dump($_COOKIE); //Muestra un array asociativo 
?>

<?php
$cookie_name("nombre");
$cookie_value("Juan");
setcookie($cookie_name, $cookie_value);

//Par preguntar si existe una cookie
if(isset($_COOKIE["usuario"])){
	echo "Bienvenido " . $_COOKIE["usuario"];
}
?>