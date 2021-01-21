Funciones

1) Funcion Anonima: no le asignamos nombre sino que guardamos el valor de retorno en una variable.

	var multiplicar = function (argumento) {
		//body
	}
para ejecutarla:
console.log(multiplicar(5, 83));

2) Scope: alcance de una variable -> determina su accesibilidad.

3) Closure: Es una función que viene adentro de otra función -> tiene un scope local. 
La inner fn (función hija) no necesita recibir los mismo parámetros que la función padre (los parámetros funcionan como variables globales para la función hija).
En la función padre se pone el return el llamado a la función clousere (displayName();)

Example:
		  function init() {
			  var name = 'Mozilla'; // name is a local variable created by init
			  function displayName() { // displayName() is the inner function, a closure
				alert(name); // use variable declared in the parent function
			  }
			  displayName();
		}
		init();

4) Callback: Es una función que se pasa como parámetro dentro de otra función.

Example:
		function greeting(name) {
		  alert('Hello ' + name);
		}

		function processUserInput(callback) {
		  var name = prompt('Please enter your name.');
		  callback(name);
		}

		processUserInput(greeting);
		
callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as fetch().		








