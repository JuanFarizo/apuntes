Embedding Documents:
    -------------------------------------
	Tour Guide Documents en Tour Document
	-------------------------------------

Cuando creamos un documento Tour el user simplemente agrega un arreglo de user IDs, y obtiene el User Document correspondiente basados en esos IDs y los agrega al Tour Document- En otras palabras lo embebemos dentro de Tour

En tourModel.js:
	guides: Array


y En tour cada vez que creamos uno agregamos los id de los usuarios. Mediante un document Middleware

tourSchema.pre('save', async function (next) {
  const guidesPromises = this.guides.map(async id => await User.findById(id)) //El map asi esta devolviendo un array de promesas
  this.guides = await Promise.all(guidesPromises); //Esperamos todas las promesas y Sobreescribe el arreglo de ids por el arreglo de documentos.
  next();
})