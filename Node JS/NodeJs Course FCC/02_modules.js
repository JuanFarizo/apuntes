--------------MODULES---------------


- Each JS file is treated as a spearate MODULES

- Node.js uses the CommonJS module system: require(), exports o module.exports;

- ES module system is used in browser: import // export;

Como funciona:

	Resolving&Loading -> Wrapping -> Execution -> Returning Exports -> Caching

We can load 3 kinds of modules:
	
	- Core Modules eg. require('http');
	- Developer Modules eg. require('./lib/controller');
	- third part modules(from NPM) eg. require('express');	


Path resolving: How node decides which module to load:
1) Start with core modules
2) if begins with './' or '../' try to load developer module
3) If no file found try to find folder with index.js in it
4) Else go to node_modules/ and try to find module there.

Una vez que el modulo es cargado se dice que is wrapped in function que otoroga ciertos objetos:

(function(exports, require, module, __filename, __dirname){

});
	require: function to require modules
	module: reference to the current module
	exports: a reference to module.exports, used to export object from a module
	__filename: absolute path of the current modules file
	__dirname: directory name of the current module



Una vez que carga el modulo lo coloca instantaneamente dentro de la funcion descripta.

Mantiene la privacidad de top-level variables -> Permite que cada modulo tengo un scope propio.

	
** require function returns export of the required module **
** module.exports is the returned object(important!!!!) **

Podemos exportar variables que van a ser devueltas por el return del require function y lo hacemos asignando variables al modulo.exports o simplemente exports 

 En la practica:
 	Cuando queremos exportar una funcion o solamente una variable utilizamos: module.export
 							module.exports = Calculator;
 	Cuando queremos exportar multiples funciones o variables:
 							exports.add = (a, b) => a + b;



 ----------------PRACTICA----------------

//Usando solo Export

exports.add = (a, b) => a + b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;

Los podemos requerir:

const { add, multiply } = require('./test-module-2'); -> Obtenemos un objeto que tiene todas esas propiedades (add, multiplay y divide).

console.log(multiply(2, 5));
console.log(add(3, 4));

-------------OTRA OPCION ES CREAR UNA CLASE----------------
// module.exports

class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}
module.exports = Calcultar;


const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));


------------OTRA OPCION ES USING CACHING---------------
//cachin
console.log("Hello from the module");

module.exports = () => console.log("Log this beautiful text 😍");

require('./test-module-3')(); //PRIMERO SE EJECUTA EL module.export y luego se ejecuta la funcion ())
require('./test-module-3')();
require('./test-module-3')();

El resultado de ejecutar ese codigo es:
	Hello from the module      //Solo se ejecuta una sola vez ya que el caching una vez  que el modulo esta cargado no se vuelve a cargar y ejecutar, en cambio las funciones que si llamemos si lo van a hacer.
	Log this beautiful text 😍
	Log this beautiful text 😍
	Log this beautiful text 😍
