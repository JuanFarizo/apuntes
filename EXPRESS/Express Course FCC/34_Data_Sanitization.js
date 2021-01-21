---DATA SANITIZATION---
Sanitizar la información significa limpiar el input de posible codigo malicioso.

Lo hacemos luego de recibir la data del body parser en app.js

Instalamos dos paquetes:
	npm i express-mongo-sanitize
	npm i xss-clean

En app.js:

	const mongoSanitize = require('express-mongo-sanitize');
	const xss = require('xss-clean');

	
//Data sanitization agains NoSQL query injection
app.use(mongoSanitize()); // Ve el request body, el req query string y el request.params y los filtra de $ y .
//Data sanitization agains XSS
app.use(xss()); //Limpia el input de HTML malicioso
