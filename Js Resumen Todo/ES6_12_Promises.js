Promesas en Js

- Promise es una funcion constructora -> debemos usar la palabra new para crear una. Toma funciones como tambien parametros.
Ej.: 

	const myPromise = new Promise((resolve, reject) => {

	});
	
resolve and reject. These are methods used to determine the outcome of the promise. 

- Una promesa puede tener 3 estados:
	pending
	fulfilled
	rejected
	
The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail.


		const myPromise = new Promise((resolve, reject) => {
		  if(condition here) {
			resolve("Promise was fulfilled");
		  } else {
			reject("Promise was rejected");
		  }
		});
		
		En este ejemplo se le pasa un string al argumento de las funciones (resolve y reject) pero en general es un objeto con datafrom (puede ser cualquier cosa en realidad)
		
-	Manejar una promesa Fulfilled con then -> asynchronous.
	Se utiliza cuando no sabemos cuanto tiempo tardara recibir una request del servidor asi podemos hacer uso de esa informacion recibida.
	El metodo then se ejecuta inmediatamente despues que la promesa es cumplica con resolve.
	
		myPromise.then(result => {
	  // do something with the result.
	});
	
	result comes from the argument given to the resolve method.
		
	La promesa completa quedaria:
		const makeServerRequest = new Promise((resolve, reject) => {
    
		  if(responseFromServer) {
			resolve("We got the data");
		  } else {  
			reject("Data not received");
		  }

		  makeServerRequest.then(result => {
			console.log(result);
		  });
		});

-	Manejar una promesa rechazada con catch
	Catch es un metodo usado cuando tu promesa es rechadaza. Se ejecuta inmediatamente despues que el metodo reject es llamado.
	
	myPromise.catch(error => {
	  // do something with the error.
	});
	
	error is the argument passed in to the reject method.
	
	Un ejemplo de promesa completae con .then y .catch quedaria:
	
	const makeServerRequest = new Promise((resolve, reject) => {			
	  if(responseFromServer) {
		resolve("We got the data");
	  } else {  
		reject("Data not received");
	  }
	});

	makeServerRequest.then(result => {
	  console.log(result);

	makeServerRequest.catch(error => {
	  console.log(error);
	});

	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
