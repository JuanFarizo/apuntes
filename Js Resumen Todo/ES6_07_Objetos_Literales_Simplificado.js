Write Concise Object Literal Declarations Using Object Property Shorthand

Podemos desclarar objetos literales de forma abreviada:
	const getMousePosition = (x, y) => ({ x, y });
	
El codigo lo que hace es a la propiedad asignarle el valor contenido en la propiedad, es decir:
x:x
y:y


const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};

createPerson("Zodiac Hasbro", 56, "male") esto nos devuelve: {name: "Zodiac Hasbro", age: 56, gender: "male"}.