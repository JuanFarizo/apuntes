Template literal
	Permite crear muchas lineas de String y usar interpolacion para crear strings:
	
	se utilizan `` backticks
	${variable}
	\n nos ahorra de utilizar el salto de linea y de concatenar con el +
	
		const person = {
	  name: "Zodiac Hasbro",
	  age: 56
	};

	// Template literal with multi-line and string interpolation
	const greeting = `Hello, my name is ${person.name}!
	I am ${person.age} years old.`;

	console.log(greeting); // prints
	// Hello, my name is Zodiac Hasbro!
	// I am 56 years old.
	
	