AJAX JSON API'S

JSON: Formato de intercambio de datos que deriva de la notacion de objetos literales en JS.

JSON.stringify(): recibe un objeto y lo transforma a un string del tipo json

var miObjeto = {
	nombre: "Juan",
	edad: 25
}

var miObjetoJson = JSON.stringify(miObjeto);

{"nombre":"Juan","edad":25}

JSON.parse(): recibe un string en formato del tipo JSON y lo transforma a un objeto

var miFormatoJson = {"nombre":"Juan","edad":25};

var miObjetoLiteral = JSON.parse(miFormatoJson);

---------------------------------------------------------

AJAX = Asynchronous JavaScript y XML:
Nos permite hacer peticiones HTTP (GET Y POST) sin tener que salir del documento HTML actual. 

Fetch: manera en que ES6 propone hacer llamado asincronos.

FETCH: Como primer parámetro se le pasa la URL de donde sacamos la información. SE TRABAJA CON DOS MÉTODOS:

.THEN: son promesas, se dice lo que se va a hacer una vez que se tiene la información. Se lo ejecuta dos veces: 
	1) Devuelve la información parseada en forma de objeto literal. Es indispensable que se escriba tal cual muestra el ejemplo al return. Recibe un callback el cual retornara la respuesta del llamado asincrónico. 
	2) Recibe lo que retorna la 1).then es decir la información parseada. Manipulamos la información que recibimos en formato JSON.
	
CATCH: Recibe un error si existiere, es decir si el llamado no tiene respuesta. Si hay errores imprime en consola el tipo de error.

fetch ("url") 
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		//do stuff with data;
	})
	.catch(function(error){
		console.log("the error was: " + error);
	})
	
Fetch esta basado en PROMESAS. Permite que metodos asincronos devuelvan valores como si fueran sincronos: devuelve la promesa de suministrar la informacion solicitada en algun momento.

var campos = {
	nombre: "ada",
	apellido: "lovelace"
}

var datosDelFormulario = new FormData(); //CREA UN OBJETO DEL TIPO FORMDATA
datosDelFormulario.append('datos', JSON.stringify(campos));

Si deseamos enviar datos via POST:
	fetch("url", {
		method: 'POST',
		body: datosDelFormulario
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		//do stuff with data;
	})
	.catch(function(error){
		console.log("the error was: " + error);
	})


---------------------------------------------------------
There are two versions of this method: a two and a three parameter version:

formData.append(name, value);
formData.append(name, value, filename);

Parameters:
1. name
	The name of the field whose data is contained in value.
2. value
	The field's value. This can be a USVString or Blob (including subclasses such as File). If none of these are specified the value is converted to a string.	
3. filename Optional
	The filename reported to the server (a USVString), when a Blob or File is passed as the second parameter.The default filename for Blob objects is "blob". The default filename for File objects is the file's filename





