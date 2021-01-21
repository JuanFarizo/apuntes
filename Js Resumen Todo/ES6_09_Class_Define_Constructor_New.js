Use class Syntax to Define a Constructor Function:
	Utiliza la keyword class -> No tiene que ver puramente con la POO solo es parte de la sintaxis de Js.
	La keyword class declara una nueva funcion a la que se le añade el constructor. El constructor es invocado cuando se lo llama con la keyword new al crear un nuevo objeto.
	
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter'); // nos devuelve Jupiter

Se utiliza UpperCamelCase por convencion en el nombre de la clase 