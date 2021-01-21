Use getters and setters to Control Access to an Object

	Los getters devuelven un valor que esta dentro del objeto que es una variable privada.
	Los setters permiten establecer el valor de estas variables privadas pasando el valor en la funcion.
	
	Es convencion anteceder el nombre de una variable priavada con _
		
		class Book {
	  constructor(author) {
		this._author = author;
	  }
	  // getter
	  get writer() {
		return this._author;
	  }
	  // setter
	  set writer(updatedAuthor) {
		this._author = updatedAuthor;
	  }
	}
	
	const lol = new Book('anonymous'); -> el constructor establece _author con el valor anonymous
	console.log(lol.writer);  /* anonymous */ -> llama al get y devuelve _author
	lol.writer = 'wut';	-> el set establece _author en wut
	console.log(lol.writer);  /* wut */ -> llama al get y ahora _author tiene el valor wut