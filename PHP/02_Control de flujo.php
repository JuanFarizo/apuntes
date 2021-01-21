Control de flujo
FALSE				TRUE
false				true
null				1
0					"1"
"0"					Cualquier dato con contenido
" "
[]


Operadores de Asignación 
Operador Equivale a  Descripción
$x = $y $x = $y Asigna el valor de $y a $x
$x += $y $x = $x + $y Suma $x a $y y lo guarda en $x
$x -= $y $x = $x - $y Resta $x a $y y lo guarda en $x
$x *= $y $x = $x * $y Multiplica $x a $y y lo guarda en $x
$x /= $y $x = $x / $y Divide $x a $y y lo guarda en $x
$x .= $y $x = $x . $y Concatena las cadenas de caracteres 

<?php
		$prueba = true;
			if($prueba == true) {
			echo "Hola Mundo";
			}
?>


PALABRAS QUE MODIFICAN EL COMPORTAMIENTO DE UN BUCLE:
-Continue: saltea la parte del codigo que esta a continuacion.(solo se puede utilizar dentro de un bucle)
-Break: corta el bucle. (solo se puede utilizar dentro de un bucle)
-Exit: termina toda la ejecucion de php (en cualquier parte del codigo)
-Return: finaliza por completo la ejecucion de una funcion(solo se puede utilizar dentro de un bucle)



Operadores Lógicos:							If Ternario:
==										Es un operador que devuelve un valor											
!=										condicion ? true : false;
||
&&
!

Switch Estructura

switch ($i) {
	case 1: 
			break;
	case 2: 
			break;
	case 3:
			break;
	default: 
			break;
}





