---RATE LIMITING---
Limitar la cantidad de request provenientes de una IP para prevenir DDoS o Brute Force Attack.

**Lo implementamos como una GLOBAL MIDDLEWARE FUNCTION**
Va a contar el numero de request ingresando desde un IP y cuando pasa un limite se bloquean esas requests

Lo hacemos en app.js:
	1. Usamos el package Express Rate Limit
	https://www.npmjs.com/package/express-rate-limit

	npm i express-rate-limit

	const rateLimit = require('express-rate-limit');


	//Limit Request from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Demasiadas request de esta IP, por favor intente mas tarde en una hr',
});
app.use('/api', limiter); //Aplicamos este middleware solo a /api