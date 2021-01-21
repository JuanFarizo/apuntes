Scope: Nos da el alcance dependiendo si el atributo es:
1_ Public: hace a la propiedad visible desde cualquier entorno de php.
2_ Privated: la propiedad es visible unicamente desde la clase a la que pertenece.
3_ Protected: la propiedad es visible desde la clase a la que pertenece y de sus clases hijas.

Getters & Setters:
Por diseño se hacen los atributos privados y para poder modificarlos o acceder a ellos se utilizan métodos ej. setNombre y getNombre.


Constructor: Método que se ejecuta al crear una instancia de un objeto.
Al hacer : $perro = new Mascota(); se ejecuta automaticamente el metodo constructor.

se define: public function __construct () { } #tambien puede ser privated

este método nos permite determinar condiciones obligatorias para construir un objeto.

public function __construct ($nombre, $apellido) { } #si no paso los parametros al construir una nueva instancia tirará error.