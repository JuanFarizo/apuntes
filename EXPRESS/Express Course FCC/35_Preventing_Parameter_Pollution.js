----PREVENTING PARAMETER POLLUTION-----

Parametros que van en el query string (es decir los que se pasan en la url)

Para lo cual utilizamos un paquete llamado HPP
	npm i hpp

const hpp = require('hpp');

app.use(
  hpp({
    //Pasamos un objeto y especificamos la whitelist
    whitelist: [
      'duration',
      'ratingQuantity',
      'ratinsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);