------------FIELD LIMMITING--------

http://127.0.0.1:3000/api/v1/tours?sort=price&fields=name,price,duration,difficulty

Si usamos el -price por ejemplo nos excluye el precio de la busqueda

es una query con fields y sort

  //FILTERING
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v'); //EXCLUIMOS __v por defecto si el usuario no hace ninguna proyeccion
    }


SI DESEAMOS OCULTAR POR DEFECTO CIERTA INFORMACION EN EL SCHEMA, es decir en el TourModel.js agregamos la propiedad select: false:

	createAt: {
    type: Date,
    default: Date.now(), //TIMESTAMP
    select: false //NO SE VA A MOSTRAR CUANDO HAGAMOS UNA QUERY, LO MISMO PODEMOS HACER POR EJ PARA PASSWORDS
  }