<!-- Arrays Ejemplo
OPERADOR : =>  "separa los keyvalue de los valores" -->

<?php
$UnJugador = [
    "nombre" => "Emanuel David",
    "apellido" => "UnJugador",
    "apodo" => "Manu",
    "altura" => 1.98,
    "peso" => 93,
    "equipos" => [
      "Andino Sport Club",
      "Estudiantes de Bahía Blanca",
      "Viola Reggio Calabria",
      "Kinder Bolonia",
      "San Antonio Spurs"
    ],
];
  $nombre = $UnJugador["nombre"];
  $apodo = $UnJugador["apodo"];
  $equipo = $UnJugador["equipos"][4];
  echo $equipo;

  foreach ($unJugador as $key => $value) {
    var_dump ($value);
  }
  ?>
  
<!-- 
$valor va a tomar el valor del elemento que trae el foreach cada vez.
Foreach: recorre todas las posiciones del array  trayendo en cada vuelta el valor de esa posicion.
el foreach se ejecuta tantas veces como elementos tenga $array. -->


 <!-- foreach ($array as $posicion => $valor) {  //de esta forma nos trae el keyvalue del array y $valor toma el valor de dicho keyvalue
	 echo $valor;
 } -->
  