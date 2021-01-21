Captura de datos formularios 


Los datos enviados por un formulario son recibidos en la página destino, especificada en el atributo action de la etiqueta FORM desde la página origen. 
Estos datos pueden capturarse de diferente manera según el método utilizado en el formulario (GET o POST).
Si no se especifica el atributo action, entonces la página destino será la misma página origen donde se encuentra el formulario. 

<form action='registrar.php' method='post' enctype='multipart/form-data'> 
	Nombre: <input type='text' name='nombre'>
	Apellido: <input type='text' name='apellido'>
	Archivo: <input type='file' name='archivo'>
	<input type='submit' value='Enviar'>
</form>