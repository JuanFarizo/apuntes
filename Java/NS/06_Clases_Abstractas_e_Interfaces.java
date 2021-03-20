-----------CLASES ABSTRACTAS E INTERFACES-----------

CLASES Y MÉTODOS ABSTRACTOS 
La única razón para establecer esta interfaz común es que pueda ser expresado diferente para cada diferente sub-tipo.

Se crea una clase abstracta cuando desea manipular un juego de clases a través de una interfaz común. Todos los métodos derivados de clases que posean la misma firma de clase base usarán el mecanismo de enlace dinámico (polimorfismo).

Sintaxis para la declaración de un método abstracto : 

	abstract void X();

Una clase que contiene métodos abstractos se llama clase abstracta. Si una clase contiene uno o más métodos abstractos, la clase debe ser calificada como abstracta (de otro modo el compilador dará un mensaje de error) :

	abstract class Instrument() { ...


Si hereda de una clase abstracta y pretende hacer objetos de un tipo nuevo, se deberá proporcionar las definiciones de los métodos para todos los métodos abstractos en la clase base. Si no lo hace (puede no hacerlo) entonces las clases derivadas también deberán ser abstractas y el compilador le obligará a identificar la clase como abstracta con la palabra "abstract". 

ES POSIBLE DECLARAR UNA CLASE COMO ABSTRACTA SIN INCLUIR NINGÚN MÉTODO ABSTRACTO. Esto es útil cuando se tiene una clase en la que no es necesario tener ningún método abstracto, pero se quiere prevenir la creación de instancias de esa clase. 

----------------------INTERFACES------------------------

Lleva el concepto abstract un paso más allá. 
Una interfaz puede contener campos, pero éstos son implícitamente static y final.
La interfaz se usa para establecer un "protocolo" entre clases.
Para crear una interfaz, utilice la palabra clave interface.

DECLARACIÓN:
Como en una clase, puedes añadir la palabra reservada public antes de la palabra clave interface (pero sólo si esa interfaz está definida en un fichero del mismo nombre) o no ponerle nada para darle un estado friendly (amigable) de forma que sólo se pueda usar dentro del mismo paquete. 

IMPLEMENTACIÓN:
Para hacer una clase que se ajuste a una interfaz particular (o grupo de interfaces) utilice la palabra reservada IMPLEMENTS.

Una vez que has implementado una interfaz, esa implementación se convierte en una clase ordinaria que puede ser extendida de forma regular. 
Puedes elegir declarar de forma explícita las declaraciones de métodos en una interfaz como public. Pero son public incluso si no lo indicas. De otra manera serían por defecto friendly (amigable)


Usando los mismos nombres de método en interfaces diferentes que se intentan combinar generalmente originan confusión en la legibilidad del código


Puedes fácilmente añadir declaraciones de nuevos métodos a una interfaz usando herencia, y puedes también combinar varias interfaces hacia un nuevo interface con herencia. En ambos casos obtienes una nueva interfaz.
Normalmente, puedes usar extends con una única clase, pero desde una interface puede ser hecho con varias interfaces, extends se puede referir a múltiples interfaces

--------------------HERENCIA MÚLTIPLE---------------------
Como una interfaz no tiene implementación en absoluto - es decir, no hay almacenamiento asociado con una interfaz - no hay nada que evite que varias interfaces puedan combinarse.
En una clase derivada, no estás obligado a tener una clase base que sea tanto una clase abstracta o "concreta" (una sin métodos abstract). Si no heredas de una interfaz, puedes heredar sólo de uno. El resto de elementos base deben ser interfaces. Colocas todos los nombres de interfaces tras la palabra reservada implements y separadas por comas. Puedes tener tantas interfaces como quieras



cualquier campo que pongas en una interfaz es automáticamente static y final. Los campos en una interfaz son automáticamente public. Estos no pueden ser "finales vacíos", pero pueden ser inicializados con expresiones no constantes.


------------CLASES INTERNAS--------------
Una clase interna es igual a una clase normal, pero está declarada dentro de otra clase. 
La forma de hacer referencia:
	ClaseExterna.ClaseInterna


Normalmente (salvo que la clase interna sea static), cuando se crea una instancia de una clase interna, debe existir una instancia de la clase externa asociada.

new ClaseInterna();

Para crear una clase interna desde otra clase se debería usar la siguiente sintaxis:
new ClaseExterna().new ClaseInterna();

----------------CLASES MIEMBRO-----------
Son aquellas que están directamente en el ámbito de la clase.
Pueden tener los siguientes modificadores:
	•	De acceso: Pueden ser públicas, privadas, protegidas o “friendly”.
	•	Estáticas: Están asociadas a la clase y no a una instancia. Tiene acceso a los miembros estáticos de la clase externa.


------------CLASES LOCALES------------
Una clase definida dentro de un método. Pueden acceder a las variables de instancia de la clase externa. También pueden acceder a las variables locales del método, pero con la limitación que éstas deben ser final.

Recordar que las variables locales sólo se pueden acceder si son final.

Clases anónimas:
Se puede declarar una clase anónima, es decir, sin nombre. Se utiliza la siguiente sintaxis:
Si se desea inicializar el objeto se debe especificar código entre llaves ({}), por ejemplo:
new ClaseOInterfaz() {
   {
      /* Código de inicialización... */
   }
}

Se puede heredar de una clase o implementar una interfaz, pero no las dos cosas a la vez
Al no tener nombres, no se puede definir un constructor. Al no poder definir un constructor, debe existir un constructor sin parámetros en la clase base.


