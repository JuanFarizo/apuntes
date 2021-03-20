------------------Promesas--------------------


const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

Las promesas tienen tres partes claves:
	1. Se crea una costante con un callback el cual va a crear una instancia de Promise 
	2. Dentro del callback de la promesa creamos nuestra funcion asincronica y le agregamos el resolve y reject que son dos metodos que nos van a devolver informacion para poder usar con el then y el catch
	3. Llamamos a la variable readFilePro(`$(__dirname)/dog.txt`).then(data)  pasandole el argumento es va a ser el file del callback y luego aplicamos el metodo then

	********Se pueden encadenar los .then metodos a partir de una promesa**********

				Se llama flat strcture of chain promises 



En general cuando se programa se consumen promesas y no se las genera. Por lo que podemos utilizar el metodo async/wait