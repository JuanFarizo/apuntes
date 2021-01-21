-----URL CON PARAMETROS-----

Como definirlos: Se definen con dos puntos y el nomber del parametro

app.get('/api/v1/tours/:id', (req, res) => {

Si deseamos que el parametro sea opcional usamos el signo de pregunta

app.get('/api/v1/tours/:id?', (req, res) => {

Como leerlos: Los multiples parametros se van almacenando en un objeto llamado req.params

 Si quiero saber el id simplemente accedo como se acceden a los objetos:

 const id =	req.params.id;


 ------REFACTORING ROUTES----------


const getAllTours = (req, res) => {
  res.json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  //RUTA CON PARAMETRO
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.json({
    status: 'success',
    data: tour,
  });
};

const createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newid }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const deleteTour = (req, res) => {
  if (req.params * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messagge: 'invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const updateTour = (req, res) => {
  if (req.params * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messagge: 'invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Tour UPdated>',
    },
  });
};

app.get('/api/v1/tours', getAllTours); 
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.post('/api/v1/tours', createTour);
app.delete('/api/v1/tours/:id', deleteTour);
 
//PARA REFACTORIZAR TODAS LAS RUTAS

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour);

