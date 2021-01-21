MANEJO DE ARCHIVOS
1) Agregarlo en formulario   <input type='file'>
2) Validarlo  <form enctype='multipart/form-data'>
3) Guardarlo del lado del servidor

$_FILES: Contiene toda la informacion de los archivos subidos a traves del metodo POST.
Es un array asociativo(Tiene tantos campos como archivos se hayan enviado.), dentro del cual hay otro array asociativo.
Ej. Si adjuntamos un CV, una FOTO y otra FOTO.
Tenemos un array con:
"CV" => cv.doc
"Foto1" => foto1.jpg
"Foto2" => foot2.jpg

y dentro de cada uno tenemos:
"error" => 0 (cualquier numero distinto de 0 es error) https://www.php.net/manual/es/features.file-upload.errors.php
"name" =>
"type" =>
"tmp_name" =>
"size" =>

Forma de acceder a dicha informacion:
$_FILES["archivo"]["error"]
$_FILES["archivo"]["name"]
$_FILES["archivo"]["type"]
$_FILES["archivo"]["tmp_name"]
$_FILES["archivo"]["size"]


FORMULARIO CLASICO:

<form action='registrar.php' method='post' enctype='multipart/form-data'>
	Nombre: <input type='texto' name='nombre'>
	Apellido: <input type='texto' name='apellido'>
	Archivo: <input type='file' name='archivo'>
	<input type='submit' value='Enviar'>
</form>

Atributo enctype: especifica como deben codificarse los datos de formulario al enviarlo al servidor.
Los valores que puede tomar este atriibuto son:
- aplication/x-www-form-urlencoded
- text/plain
- multipart/form-data

<?php 
if ($_FILES) {
	if (($_FILES['cv']['error']) != 0){					//Para validar que se cargue un archivo sin error, hay otra forma de hacerlo
		echo "Hubo un error al cargar el cv <br>";
	}
	else {
		$ext = pathinfo($_FILES['cv']['name'], PATHINFO_EXTENSION);   //Funcion pathinfo(arg1, arg2) arg1 es el nombre del archivo
		if ($ext != 'pdf' && $ext != 'doc' && $ext != 'docx'){
			echo "El cv debe ser pdf, doc o docx <br>";
		}
		else {
			//Si no hay errores debemos cargar el archivo
			move_uploaded_file($_FILES['cv']['tmp_name'], 'archivos/cv.' .$ext);			//Funcion move_uploaded_file (arg1, arg2) arg1 nos interesa de $_FILES tmp_name , arg2 es el lugar donde queremos guardar el archivo
		}
	}
}


//Forma2 de validar si un archivo se subio sin errores:
if($_FILES['arcvio']['error'] === UPLOAD_ERR_OK) {
	
}

//Funcion dirname(path, levels): obtenemos la ruta del archivo que esta siendo ejecutado
//path	Required. Specifies a path to check
//levels	Optional. An integer that specifies the number of parent directories to go up. Default is 1
dirname(__FILE__);
?> 


