Setting Up Express:
1. Creamos un package.json con: npm init

2. Instalamos express usando npm: npm i express

3. Creamos app.js es donde va a estar toda la configuracion del servidor:

	const express = require('express');

	const app = express();

	/*----ROUTING: ES COMO RESPONDE UNA APP NODEJS A UN REQUEST (A UN REQUEST DETERMINADO)
	llamamos app.elMetodo('url', callback (req, res) => {}); Las variables mas comunes del callback son req y res
	si queremos especificar el status code lo ponemos antes del send*/
	app.get('/', (req, res) => {
	  //   res.status(200).send('Hellow');
	  res.status(200).json({ message: 'esto es un json', app: 'JuanM' });
	});

	app.post('/', (req, res) => {
	  res.send('este es un post');
	});

	//Podemos pasar JSON data aplicando el metodo .json

	const port = 3000;
	app.listen(port, () => {
	  //callback que se ejecuta apenas comienza a correr el server
	  console.log(`App running on port: ${port}`);
	}); //Comienza el servidor



	----------------------------------------------------
	Packages para trabajar con esLint y prettier

	npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev 

	AHORA DEBEMOS CREAR CONFIG FILES PARA PRETTIER Y ESLINT:

	.prettierc 
				{
					"singleQuote" : true
				}

	.eslintc.json



