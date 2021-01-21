------MODELOS CRUD--------
LOS TRABAJAMOS DE MODO ASINCRONOS lo que implica utilizar TRY y CATCH

Model.Prototype en JS es un objeto creado a partir de una clase, en este caso creado en un modelo.

--------CREATE-----------

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      messagge: err,
    });
  }
};

Tour.create() es una promesa por lo que la podemos trabajar de forma asincronica utilizando async y await


Dentro del create(req.body pasamos la data almasenada dentro del request.body


-------------READ GETALL-----------

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json({
      status: 'success',
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messagge: err,
    });
  }
};

--------------READ GET ONE-------------

exports.getTour = async (req, res) => {
  //RUTA CON PARAMETRO
  try {
    const tour = await Tour.findById(req.params.id);
    res.json({
      status: 'success',
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messagge: err,
    });
  }
};

-------------UPDATING DOCUMENTS------------
findByIdAndUpdate: como tercer argumento podemos pasar algunas opciones. Solo actualiza los campos que son diferentes.
RECORDAR: PATCH: Podemos actualizar objetos por partes
          UPDATE: Hay que actualizar el objeto por completo

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour: { tour },
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      messagge: err,
    });
  }
};










