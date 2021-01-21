Crear un Modulo Script

-	ES6 Permite compartir codigo entre archivos Js. Compartiendo las partes que deseas compartir del codigo, en otros archivos en los lugares que deseas que sea llamado.
	Para esto creamos una etiqueta script de HTML con el type = "module"

		<script type="module" src="filename.js"></script>
	
-	Uso de Export para compartir codigo:
	Hay mas de una forma de exportar codigo:
	1)
		export const add = (x, y) => {
		  return x + y;
		}
	
	2)
		const add = (x, y) => {
		  return x + y;
		}

		export { add }; // Si deseamos exportar mas de una funcion o variable las listamos separadas por coma.
		
-	Reutilizar codigo Js usando import: permite elegir que parte de un modulo o archivo importar.

	import { add } from './math_functions.js';
	
	
	Si importamos mas de un elemento
	import { add, subtract } from './math_functions.js';
	
	./ tells the import to look for the math_functions.js file in the same folder as the current file.
	
	
	* Permite importar todo el contenido de un un archivo
	
	import * as myMathModule from "./math_functions.js";
	Esta linea lo que hace es crear un objeto llamado myMathModule (o el nombre que elijamos para esa variable) cuyo contenido es lo que se exporto del archivo math_functions.js.
	Accedemos a las funciones como accedemos a las propiedades de cualquier objeto con la notacion punto . :
	myMathModule.add(2,3);
	myMathModule.subtract(5,3);


-	Crear un Export Fallback con un export default:

	Otra sintaxis del export es el export default: Se utiliza el export default cuando se exporta un solo valor. Tambien es usado para crear un  fallback value for a file or module.
	
	Como solo se puede exportar un valor por defecto debemos tener un solo export default en cada modulo o archivo.
	
	No se puede usar con var, let, or const.
	
	
		// named function
		export default function add(x, y) {
		  return x + y;
		}

		// anonymous function
		export default function(x, y) {
		  return x + y;
		}

-	Importar un export default: 

	En este caso add es el default export de math_functions.js, la diferencia con el otro import es que no usa {} y es el nombre del 
	import add from "./math_functions.js";





































