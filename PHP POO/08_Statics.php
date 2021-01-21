Static: permite definir atributos y métodos estáticos compartidos por todas las instancias y a la vez por nignuna.

Declarar propiedades o metodos como estáticos los hacen accesibles sin necesidad de instanciar la clase.
Una propiedad declarada como static no puede ser accedida con un objeto de clase instanciado (aunque un método estático si lo puede hacer).

ej.:
<?php 

class Colectivo {
	
	public static $precios = [0.25, 0.50, 0.75];
	
	public static function getPrecio($distancia) {
		if ($distancia < 3) {
			return Colectivo::$precios[0];
		}
		elseif ($distancia < 3){
			return self::$precios[1]; //podemos utilizar el self de la misma forma
		}
		else {
			return self::$precios[2];
		}
	}
}
$colectivo = new Colectivo;
$precio = $colectivo->getPrecio(3);
echo $precio;
?> 

Parent::__construct() {}

la palabra clave parent permite que se ejecute un método de la clase padre, de esa forma reutilizamos el esfuerzo y no debemos copiar todo.
Piso un método de la clase padre y le agrego funcionalidad.


InstanceOf: opereador que consulta si una variable es instancia de "". Ej.:
if ($perro istanceOf Mascota) { 
echo "soy una mascota";
}



Operador ::

permite preguntar atributos y métodos estáticos.

var_dump (Colectivo::$precios);

nombreDeLaClase::$nombreDeLaVariable;