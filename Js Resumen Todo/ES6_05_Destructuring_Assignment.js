Use Destructuring Assignment to Extract Values from Objects:

-	Permite la asignacion de valores a variable desde un objeto de forma que facilita la lectura. Ej.:
		
		const user = { name: 'John Doe', age: 34 }; // Tenemos un objeto
		const { name, age } = user; //Creamos dos constantes y le asignamos los valores que tienen esas propiedades en los objetos
		// Ahora name = 'John Doe', age = 34
	
-	Los nombres de las propiedades y de las constantes a las que se asignan deben coincidir.
	
-	Si le queremos poner otro nombre a las variables a las que le asignamos los valores debemos aclararlo en la definicion:
		const { name: userName, age: userAge } = user;
		
-	Tambien podemos usar Destructuring Assignment to Extract Values from NESTED Objects:
	Si el objeto esta anidado primero debemos especificar de cual propiedad de mas arriba deseamos extrar data. Ej. :
	
		const user = {
		  johnDoe: { 
			age: 34,
			email: 'johnDoe@freeCodeCamp.com'
		  }
		};
		
		const { johnDoe: { age, email }} = user;
	
	Si deseamos modificar el nombre de las variables de asignacion es igual que antes:
		const { johnDoe: { age: userAge, email: userEmail }} = user;
		
-	Use Destructuring Assignment to Assign Variables from Arrays: Tambien podemos aplicar la misma logica para extraer informacion de un array
	
	const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
	console.log(a, b, c); // 1, 2, 5
	
	La diferencia es que no permite seleccionar el contenido, sino que para llegar a un determinado valor lo tenemos que hacer mediante sucesivas comas.
	
	Si queremos intercambiar los valores: let a = 8, b = 6;
										  [a,b] = [b, a]; //Ahora a vale 6 y b vale 8
										  
- Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements: Lo podemos combinar con el ...args parametro:
	Esto permite guardar ciertos elementos en una variable y el resto en un array separado. Ej.:
		
		const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
		console.log(a, b); // 1, 2
		console.log(arr); // [3, 4, 5, 7]
		
		Se podria dejar los primeros elementos sin tomar y capturar los siguientes:
		const [,, ...arr] = [1, 2, 3, 4, 5, 7];
		
	No se puede usar esta tecnica para tomar un subarray que deja afuera el/los ultimo/s elemento del array original
	
	
- Use Destructuring Assignment to Pass an Object as a Functions Parameters. Ej1.: 

		const profileUpdate = ({ name, age, nationality, location }) => {
		  /* do something with these fields */
		}	
	
	Al pasarle un objeto a la funcion ya se lo pasa destructurado, la funcion debe recibir un objeto con esos campos.  Ej2.:
	
			const stats = {
		  max: 56.78,
		  standard_deviation: 4.34,
		  median: 34.54,
		  mode: 23.87,
		  min: -0.75,
		  average: 35.85
		};

		const half = ({max, min}) => (max + min) / 2.0; 

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	