Funcion guardar archivos:


<?php 

function guardarArchivos() {
	if($_FILES['archivo']['error'] === UPLOAD_ERR_OK){
		$nombre = $_FILES['archivo']['name'];
		$archivo = $_FILES['archivo']['tmp_name'];
		$ext = pathinfo($nombre, PATHINFO_EXTENSION);
		
		$miArchivo = dirname(__FILE__);
		$miArchivo = $miArchivo . "/archivos/";
		$miArchivo = $miArchivo . "archivoNuevo" . $ext;
		
		move_uploaded_file($archivo, $miArchivo);
	}
	
}
//Para subir mas de un archivo:
<input type='file' name='file1'>
<input type='file' name='file2'>

$_FILES['file1'][''];
$_FILES['file2'][''];

//Otra forma es crear un array:
<input type='file' name='file[]' multiple>
$_FILES['file'][''][0];
$_FILES['file'][''][1];
?>