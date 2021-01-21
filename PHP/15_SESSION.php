SESSION

Son por usuario
Se puede recuperar en cualquier archivo de la web
La información se guarda desde el lado del servidor, sus valores son unicos para cada usuario
$_SESSION: Array asociativo
La información se borra al instante que el usuario cierra el navegador
A diferencia de cookie que persiste el tiempo que hayamos determinado

<?php 
session_start(); //Si no escribimos esta funcion no podemos utilizar $_SESSION para escribir ni para leer
//Identifica al usuario que se acaba de conectar al servidor
$_SESSION["comida"] = "Asado";
?>

<?php
// Para destruir sesion
session_start(); //Si aun no se ejecuto
session_destroy();
?>