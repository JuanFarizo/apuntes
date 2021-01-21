-----IMPORTANDO DATA TO MONGODB-------

node dev-data/data/import-dev-data.js --import //ME VA A EJECUTAR LA FUNCION importData()

node dev-data/data/import-dev-data.js --delete //ME VA A EJECUTAR LA FUNCION deleteData()


const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTION EXITOSA');
  })
  .catch((err) => {
    console.log(err);
  });

//READ JSON FILE

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//IMPORT DATA INTO DB

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Cargada!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Eliminada!');
    process.exit();
  } catch {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);


LO QUE MUESTRA PROCESS.ARGV:

	[ '/usr/bin/node',
  '/home/farins/Videos/CURSO NODEJS/complete-node-bootcamp-master/4-natours/starter/dev-data/data/import-dev-data.js',
  '--import' ]

  POR ESO HAY QUE process.arfv[2] seria el --import o --delete