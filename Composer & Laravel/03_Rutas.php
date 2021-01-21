----------- ARCHIVO DE RUTAS ----------- 

METODOS: 
- GET: Se utiliza para consultar elementos de la base de datos
- POST: Se utiliza para crear elementos de la base de datos
- PUT/PATCH: Se utiliza para modificar elementos de la base de datos
- DELETE: Se utiliza para eliminar elementos de la base de datos

Un solo archivo con el listado de todas nuestras paginas
El archivo se encuentra en /routes/web.php

Route::get("/inicio", function (){
	return "Hola, Bienvenidos a inicio";
});

El metodo puede ser post

Route::post ("/registracion", function (){
	
});

//funcion anonima sin nombre que se va a usar una sola vez que va dar funcionalidad a la ruta de inicio. Lo que retorna esta funcion es lo que va a mostrar el navegador

//en el caso de registracion puedo usar get para que muestre el formulario y luego por post para que se almacene en base de datos


----------- RUTAS PARAMETRIZADAS ----------- 

van entre llaves {} separados por /

Route::get("/peliculas/{id}", function ($id) {	
	return "Me pidieron la pelicula $id";
});

Route::get("/saludar/{nombre}/{apellido}", function ($nombre, $apellido) {	
	return "Bienvenido $nombre $apellido";
});

Si deseo que el parametro de la direccion sea optativo lo pongo con ? y agrego en la funcion un valor por default

Route::get("/saludar/{nombre}/{apellido?}", function ($nombre, $apellido = "Sin Apellido") {	
	return "Bienvenido $nombre $apellido";
});


Route::get("/ruleta/{numero}/{dinero?}", function($numero, $dinero = "50") {
  if ($numero < 0 || $numero> 36) {
    return "Numero invalido";
  }
  return "Apuesta $dinero al numero $numero";
});
