Composer 

Autoload de clases

El nombre de la clase es igual al nombre del archivo.
Mascota.php  class Mascota { }


Para no tener que hacer un require de cada una de las clases:
1) Se crea un composer.json y adentro va:

{ 
	"autoload": {
		"classmap" : [
		 "./"
		 ]
	}
}

2) Vas a la consola del laragon y en la carpeta del proyecto poner el comando:

	composer install


(Me va a crear la carpeta vendor con una carpeta composer y un autoload.php)

3) Hacer un require en el archivo de php que lo necesite:
      require 'vendor/autoload.php';
	  
	  
4) Si creo una nueva clase y deseo instanciarla tengo que actualizar el autoload (recarga la lista de clases). Voy a la consola nuevamente:

	composer dump-autoload
