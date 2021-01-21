PRACTICA JS FREECODECAMP

You can find the length of a String value by writing .length after the string variable or string literal.
"Alan Peter".length; // 10

Use Bracket Notation to Find the First Character in a String. Bracket notation is a way to get a character at a specific index within a string.

String values are immutable, which means that they cannot be altered once created. 

---------------------------------------------------------

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

---------------------------------------------------------

Variables: 
	Const: Constantes pero no inmutables -> Debe declararse e inicializarse con un valor
	Var: Scope global o de funcion
	Let: Permite declarar y luego cambiarla en el codigo -> Scope de bloque
	
---------------------------------------------------------
Tipos de datos:
	string
	number
	boolean
	nullVal: es un valor, en blanco, no es lo mismo que undefined es que no tiene valor
	undefined: es una variable que ha sido declarada pero no se le ha asignado valor
	
Formas de comparar:
	=== : check for strict equality, data types and value
	== : check for abstact equality.
	
null === undefined -> false
null == undefined -> true

---------------------------------------------------------

Loops
	for(["initialExpression"];["condition"];["incrementExpression"]) { }
	
	for in -> for objects
	for of -> for arrays
	
	for(let variable in object) { } //Se usa para recorrer los keyvalues o properties of and object
	// si queremos obtener los valores deberiamos hacer:
	console.log(object[variable]);
	
	for (let number in arreglo) { } //Permite recorrer arrays, number nos da la posicion
	//Si queremos los valores debemos:
	console.log(numbers[arreglo]);
	
	for(let number of arreglo) { } //Permite recorrer el array dando el valor en cada iteracion

Switch: Permite ejecutar diferentes acciones teniendo en cuenta diferentes condiciones.
	
	switch(expression) {
		case x:
			//code
			break;
		case y:
			//code
			break;
			
		default:
		 //code
	}
Si no encuentra la condicion se ejecuta el default	

---------------------------------------------------------

IIFE: Immediately Invoked Function Expression
Es una funcion que se ejecuta apenas es definida. No tiene nombre ni se almacena en una variable.
 
	(function(a, b) {
		return a*b; //10
	})(2, 5);
	
	Tambien se puede escribir como una Arrow Function
	((a, b) => {
		return a * b;
	})(2, 5);
		
	
---------------------------------------------------------

Operador ternario: Es un operador condicional

boolean ? "Yes" : "No"

Condicion ? CodigoSiEsVerdadera : CodigoSiEsFalsa
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
