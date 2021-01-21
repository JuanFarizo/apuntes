Funciones de hasheo para encriptar contraseñas
Permite transformar un texto plano en un texto encriptado.
1) No hay manera de que si tengo el hash recupere el texto original
2) Al volver a encriptar la contraseñas original nos da un hash verificable con el guardado

password_hash ( string $password , integer $algo [, array $options ] ) : string

password_hash() crea un nuevo hash de contraseña usando un algoritmo de hash fuerte de único sentido. password_hash() es compatible con crypt(). Por lo tanto, los hash de contraseñas creados con crypt() se pueden usar con password_hash().


<?php 

$contraseña = "monito123";

$hash = password_hash($contraseña, PASSWORD_DEFAULT); //Encripta la contraseña en un hash

$resultado = password_verify($contraseña, $hash); //Devuelve un booleano. Compara la contraseña con el hash y si coincide devuelve true
?>

password_verify — Comprueba que la contraseña coincida con un hash

password_verify ( string $password , string $hash ) : bool
Comprueba que el hash proporcionado coincida con la contraseña facilitada.

Observe que password_hash() devuelve el algoritmo, el coste y el salt como parte del hash devuelto. Por lo tanto, toda la información que es necesaria para verificar el hash está incluida. Esto permite a la función de verificación comprobar el hash sin la necesidad de almacenar por separado la información del salt o del algoritmo.

