---------REFACTORIZANDO-MODULARIZANDO--------

Si queremos reutilizar todos los metodos que desarrollamos en tourController no copiamos y pegamos todo. 

Lo que debe hacerse es crear una clase en un archivo aparte (en la carpeta utils) y agregamos los metodos por cada uno de los features o funcionalidades y cuando necesitemos usarlo importamos en cada uno de los controlladores que lo requieran


class APIFeatures {
  constructor(query, queryString) {
    //Metodo constructor se llama apenas creamos una clase
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };

    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //ADVANCE FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`); //Expresion regular

    this.query = this.query.find(JSON.parse(queryStr));
    console.log(this);
    return this;
  }
  sort() {
    if (this.queryString) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }
  paginate() {
    const page = this.queryString.page * 1 || 1; //Paso a Number el valor de req.query.pag y Valor por defecto
    const limit = this.queryString.limit * 1 || 100; //Paso a Number el valor de req.query.limit y Valor por defecto
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;

CREAMOS UNA CLASS POR LO QUE DEBEMOS APLICAR EL METODO CONSTRUCTOR. A PARTIR DE AHI DEFINIMOS LOS METODOS QUE VAN A SER REUTILIZABLES COMO filter().

En el Controller:
		Debemos instanciar a APIFeatures:
			const features = new APIFeatures(Tour.find(), req.query).filter().sort(); //INSTANCIAMOS Y LE PASAMOS LOS PARAMETROS y al Metodo que deseamos aplicar, la idea es ir encadenandolos.
    const tours = await features.query; 

    Lo que hicimos fue:
    	1. Crear un objeto de APIFeatures
    	2. Le pasamos un query Object (Tour.find())
    	3. Le pasamos el query string (req.query) que viene de express
    	4. Encadenamos los metodos, lo que hacemos entonces es manipular la query
    	5. Hacemos el await de la query en el const tours = await features.query;
