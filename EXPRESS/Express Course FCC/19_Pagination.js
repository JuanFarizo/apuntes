---------PAGINACIÓN-------

http://127.0.0.1:3000/api/v1/tours?pag=2&limit=10

skip(): la cantidad de resultados que deben ser saltados antes querying data.
limit(): limita la cantidad de resultados que queremos en el query.

query = query.skip().limit() // como en las secciones anteriores estos metodos devuelven una query por lo que se pueden seguir encadenando.
Ya utilizamos query.sort().select().skip().limit() y asi sucesivamente




    const page = req.query.page * 1 || 1; //Paso a Number el valor de req.query.pag y Valor por defecto
    const limit = req.query.limit * 1 || 100; //Paso a Number el valor de req.query.limit y Valor por defecto
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      //Si la página que ingresa el usuario no existe
      const numTours = await Tour.countDocuments();
      if (skip > numTours) throw new Error('This page no existe'); // Al lazanar un error hace que se mueva inmediantamente al catch block
    } 



 countDocuments() : Devuelve una promesa con la cantidad de resultados 