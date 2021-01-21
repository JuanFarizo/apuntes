PHP Orientado a Objetos

Variable $this : Hace referencia a la instancia a la que se le pide un método.
se va a reemplazar por la instancia concretea a la que llama el método
Si tenemos una clase Usuario y hacemos un método "describirse" que contenga un $this->nombre al llamar a la funcion describirse nos dará el nombre del usuario concreto que pedimos describirse

<?php 

    class Persona {
        //Atributos
        public $nombre = array();
        public $apellido = array();
        //Metodos
        public function guardar($nombre, $apellido) {
			$this->nombre[] = $nombre;
			$this->apellido[] = $apellido; 
        }
		public function mostrar(){
			for ($i=0; $i<count($this->nombre);$i++){
					self::formato($this->nombre[$i], $this->apellido[$i]);
		}}
		public function formato ($nombre, $apellido) {
		echo "Nombre: " . $nombre . " | Apellido: " . $apellido . "<br>";	
		}
	}
    $nuevoObjeto = new Persona(); //Creamos una nueva instancia del objeto Persona y lo guardamos en una variable

    $nuevoObjeto-> guardar("Carlos", "Fernandez"); // con el -> podemos llamar a un Atributo o a un Metodo
	$nuevoObjeto-> guardar("Chacho", "Gomez");
	$nuevoObjeto-> mostrar(); 
?>

Tipos de atributos:
- Public. Se puede utilizar el operador ->
- Private.  Se debe utilizar una función para modificar los atributos.
- Protected. Se debe utilizar una función para modificar los atributos.

Metodos:
- Acceder a atributos con $this -> nombre //$this es una palabra reservada para acceder a un atributo de dicha clase o a un metodo
- Acceder a otros metodos con $this o self::


Metodos CONSTRUCT Y DESTRUCT: deben ser publicos y no deben retornar nada.
__construct: Al instanciar la clase el metodo se ejecuta al comienzo de manera automatica
__destruct: Este metodo se ejecuta de manera automatica al final de la clase



