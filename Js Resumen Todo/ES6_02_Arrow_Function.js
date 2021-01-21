Arrow Functions: 
	Son funciones anonimas por lo que deben ser asignadas a una variable
	
		let mensaje = () => {
			return "Hello World!";
		}

Podemos eliminar los corchetes e implicitamente estamos retornando el valor

	let mensaje = () => "Hello World!"; 
	
En el parentesis podemos pasar parametros, si solo tenemos un parametro podemos eliminar el parentesis y la keyword return cuando retornamos un solo valor

	let mensaje = nombre => `Hello ${nombre}`;
	
	
	
Se pueden establecer parametros por defecto por si no se les pasa ninguno a la funcion:
	const greeting = (name = "Anonymous") => "Hello " + name;
	console.log(greeting("John")); // Hello John
	console.log(greeting()); // Hello Anonymous

