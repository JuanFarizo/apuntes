---------ASYN/AWAIT FUNCTION------------SYNTETIC SUGAR PROMISES 
Se llama asi porque solo se puede usar await dentro de una async function Esta funcion nos devuelve una Promise().

**La palabra clave async determina que la funcion es de este tipo**

	Este tipo de funciones se queda ejecuntando en el background mientras el codigo sigue su ejecucion en el EventLoop
	Por lo no se produce el bloqueo en el EL ya que trabaja de forma asincronica.
	Par manejar los errores usamos el metodo `try/catch`
	
---------CODIGO PREVIO---------
const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file');
      resolve('success');
    });
  });
};
-------------------------------

--------ASYNC------------------

const getDocPic = async () => {
	try { 
	const data = await readFilePro(`${__Dirname}/dog.txt`); // Lo que hace el await es frenar la ejecucion del codigo hasta que la promesa sea resuelta. Si la promesa es Fulfilled osea es exitosa, entonces el valor del la expresion await es el valor del resolved de la promesa.
	console.log(data);

	const res = await superagent.get(`unaURL${data}`); //esta es una promesanuevamente que va a almacenar la URL en res.
	console.log(res.body.message);

	await writeFilePro(`algo.txt`, res.body.message); //En este caso como no devuelve nada sino que escribimos en un .txt no hace falta guardarla en una variable.
	console.log('se guardo en el archivo el texto');
	} catch (err) {
		throw(err);
		console.log(err);
	}
	return 'Terminad0x'
};


Si una de las promesas (readFilePro o superagent.get o writeFilePro) arroja un error el catch lo captura y muestra.

getDocPic(); //Llamamos a la funcion

En resumen lo que hacemos es frenar la ejecucion hasta que la promesa nos devuelva algo y lo almacenamos en data.

Podemos aplicar .then method a getDocPic ya que es una promesa. Pero si queremos manejar los errores lo que se debe hacer es -> throwing error (agregado en la linea 46)


Ej. : //PUEDE SER REEMPLAZADO POR IFFE PATTERN
	getDocPic().then(x => {
		console.log(x); // Esto nos va a devolver 'Terminad0x' que es el return de toda la funcion
	}).catch(err => {
		console.log(err); //Capturamos el err lanzado con el throw
	});


-------------IIFE FUNCTION PATTERN--------------

Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.

		(function () {
		    statements
		})();

Es un patrón de diseño también conocido cómo función autoejecutable (Self-Executing Anonymous Function  ) y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el  Operador de Agrupación (). Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global. 

Lo que el codigo quedaria asi:
	(async () => {
		try {
			const x = await getDocPic();
			console.log(x);
		}
		catch(err) {   //El catch siempre tiene que ir obligadamente
			console.log(err);
		}
	})();


-----------MULTIPLE PROMISES-----------------
1. Guardamos las promesas en una variable res1Pro, res2Pro, res3Pro
2. Aplicamos el metodo await a todas las variables al mismo tiempo y asi obtenemos los valores de las promesas: // const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
3. Obtenemos lo que deseamos de la promesa usando map // const imgs = all.map((el) => el.body.message);
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message); //map guarda en imgs (un arreglo) tomando un elemento de all (el) y luego devolviendo el valor de lo que le hagamos
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n')); // Une lo que hay en el arreglo imgs y los separa un \n
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: READY ';
};