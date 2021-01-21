PHP POO

Clase: abstracción de un objeto o de una entidad. Es el molde original con el que podré hacer objetos particulares.
Instancia: Son objetos concretos de una clase.
<?php 

class nombreDeLaClase {
	
}
?> 
Cada clase se transforma en un nuevo TIPO! de dato.

Atributos: Son las caracteristicas de la Clase (sus propiedades) la palabra tiene nos ayuda a descubrirlos, una Persona tiene nombre
En UML al definir los atributos se utilizan los simbolos + y -
+ : El atributo es público: objetos externos a la clase pueden consultar su valor
- : El atributo es privado: solo la instancia propia puede preguntar el valor del atributo (Se suelen poner todos privados)

Ej 
Clase Mascota
- nombre: String
- especie: String
- edad: integer

Métodos: determinan el comportamiento de una clase
funciones getters: sirven para devolver un atributo
+ getNombre();
funciones setters: permiten cambiar el valor de un atributo
+ setNombre($nombre);

Para acceder a un atributo privado, que esta encapsulado, se lo accede a través de sus métodos.

_____________________________________________________________________________________________________________________________

<<Clases Abstractas>> : No hay instancias de estas clases. Se utilizan en conjunto con la herencia.
La clase hijo hereda los atributos y los métodos. Tendrá la opción de utilizarlos, descartarlos, reemplazarlos por los propios (override) o complementarlos.

Se ponen los simbolos <<>> si bien se declaran nunca se van a definir por ejemplo tenemos la clase abstracta
<<Animal>> y como subclases Mascota y Animal Salvaje


_____________________________________________________________________________________________________________________________

Relaciones: Es la forma en que las objetos interactuan entre ellos

Clases:  Persona				Mascota
		+nombre:String			+nombre
		+apellido:String		+especie
		+dni:integer			+edad
		-pass
		-mascota:Mascota
		
		
		+getNombre()		-jugar()
		+setNombre($nombre) -comer($nombre)
		-encriptarPass($pass)
		
		
Tipos de relaciones:
1_ Composición: rombo vacio o lleno con una flecha (Aparece la clase como un atributo ej mascota:Mascota en la clase Persona, no puede existir una mascota sin una persona)
2_ Asociación en el método utiliza un objeto de otra clase.  La clase relacionada aparece como parámetro de un método


Herencia: permite crear nuevas clases a partir de las existentes.
Las nuevas clases tendran todos los atributos y métodos de las clases Padres, y otros más especificos propios de su clase.
Padre: General.
Hijo: Específico.

La herencia se diagrama con una flecha solida de punta vacia.

OVERRIDE: Cuando el hijo sobreescribe el codigo del padre

Relaciones:
			Tiene -> Composición
			Usa -> Asociación
			Es	-> Herencia



_____________________________________________________________________________________________________________________________



Polimorfismo: Permite que diferentes objetos llamen a un mismo método, cada uno reaccionará de forma correcta, pero haciendo cosas distintas

Implementación:
- Herencia
- Interfaces

Ej. figurasGeométricas

Las clases Triángulo, Cuadrado, Rectángulo, tendrán el método calcularPerímetro() (decimos que es polimórfico el método) pero en todos se hara de forma diferente.

Cada una reaccionará de forma correcta pero teniendo códigos distintos.

_____________________________________________________________________________________________________________________________



<<Interfaces>>:
Medio común para relacionar clases que puedan no estar naturalmente relacionadas.
Son un contracto que establecen qué métodos deberan implementar todos los adhirientes a este contracto.
Si conozco el contrato y las clases que lo respetan, sabré que métodos puedo invocarle a esa clases sin duda.

El  contrato define:
- los nombres de los métodos
- el tipo de retorno
- tipo y cantidad de parámetros que reciben

NO Define:
- implementaciones
- atributos


Las interfaces NO pueden INSTANCIARSE 


Las clases adheridas al contrato serán del tipo establecido en el contrato. Se puede tener una lista de array del tipo establecido en el contrato

DIAGRAMACIÓN

Con una flecha punteada desde la clase hacia la interfaz con una flecha vacia apuntando a la interfaz.


_____________________________________________________________________________________________________________________________


Patrones de diseño: Modelo que sirve de muestra para sacar otra cosa igual.
Cuando identificamos un problema tipico podemos aplicar patrones de diseño que lo resuelve.

Patrones típicos: 

- Reactor Pattern: Patrón Reactor. Cuanado desde el código necesitamos hacer un pedido y luego ejecutar algo cuando ese pedido sea respondido.
Establecemos un manejador (handler) o una promesa (promise), que definimos con anterioridad, y que se ejecutará (reaccionará) cuando vuelva el pedido.


- Observer Pattern: Patrón Observer. Propone establecer una comunicación tal que pueda dar aviso a los interesados. El Observable avisa a los interesados Observers.

Estos patrones se diferencian en que:
- El Reactor Pattern establece una comunicación/reacción de uno a uno.
- El Observer Pattern establece una relación de muchos a uno. Muchos observers conectados a un observable.




