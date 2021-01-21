Starting API 


const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.json({
    status: 'success',
    results: tours.length, 
    data: {
      tours,   //Le paso el JSON ya convertido a objeto de js
    },
  });
}); // es buena practica poner la version de la API

const port = 3000;
app.listen(port, () => {
  //callback que se ejecuta apenas comienza a correr el server
  console.log(`App running on port: ${port}`);
}); //Comienza el servidor



----------POST--------------

Cuando usamos este metodo en express la data no esta en el req, no esta el body-date, debemos usar un middleware en orden de poder recibir la data. El middleware: app.use(express.json()); Es un proceso al que se somete la data entrante mientras la va recibiendo el servidor. Y la agrega al objeto request.

la parte de la sentencia app.use : permite utilizar middleware al que llamemos.


const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());  //LLAMA AL MIDDLEWARE SINO NO PUEDE RECIBIR DATA

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
}); // es buena practica poner la version de la API

app.post('/api/v1/tours', (req, res) => {
  const newid = tours[tours.length - 1].id + 1; //OBTIENE EL VALOR DEL ID
  const newTour = Object.assign({ id: newid }, req.body); //PERMITE HACER UN MERGE DE DOS OBJETOS CREANDO UNO NUEVO SERIA EL ID + LO QUE RECIBE DEL POST
  tours.push(newTour); //AGREGA ESE TOUR AL ARRAY DE OBJETOS
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => { //ESCRIBE EL ARCHIVO.JSON PASANDO DE OBJ DE JS A OBJ JSON.
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour, //MUESTRA LA DATA RECIBIDA A TRAVES DEL REQ
        },
      });
    }
  );
});

const port = 3000;
app.listen(port, () => {
  //callback que se ejecuta apenas comienza a correr el server
  console.log(`App running on port: ${port}`);
}); //Comienza el servidor


Son l

app.patch()  -> Devuelve un res.status(201) y en data la actualizacion
app.delete() -> Devuelve un res.status(204) y en data:null