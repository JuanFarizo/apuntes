---------------------OCULTAR LA IMPLEMENTACIÓN-------------------
Una consideración fundamental en el diseño orientado a objetos es "separar las cosas que cambian de las cosas que permanecen igual". 
Es especialmente importante para las librerías.

EJEMPLO :
	El usuario (programador cliente) de esa librería tiene que confiar en la parte que usa, y saber que no necesitará reescribir código si una nueva versión de la librería aparece. En la cara opuesta, el creador de la librería debe tener libertad para realizar modificaciones y mejoras con la seguridad que el código de los programadores no será afectado por esos cambios. 

	Esto se puede conseguir gracias a la convención.


Java proporciona especificadores de acceso que permiten al creador de la librería decir que está disponible al cliente programador, y que no está. Los niveles de control de acceso son, en orden decreciente de permisividad, public (público), protected (protegido), "friendly" (amiga, no tiene palabra reservada) y private (privado). Del párrafo anterior se podría pensar que el diseñador de librerías mantendrá todo cuanto sea posible como privado (private) y dejar accesibles los métodos que quiere que el cliente programador use. 


Cómo los integrantes son envueltos en una unidad de librería (library unit). Esto se controla con la palabra reservada package en Java, y los especificadores de acceso influyen en si una clase está en el mismo paquete o en paquetes separados

-----------PAQUETES: LA LIBRERÍA UNIDAD----------
Un paquete (package) es lo que se obtiene cuando usa la palabra reservada import para importar una librería entera:

	import java.util.*;

Esto importa la librería de utilidades que es parte de la distribución estándar de Java. 

Si quiere importar sólo una clase, puede nombrar esa clase en la sentencia import.

	import java.util.ArrayList;

Los nombres de todos los miembros de clase están aislados unos de otros.

¿qué ocurre con el nombre de las clases? Suponga que crea una clase stack que está instalada en una máquina que ya tiene otra clase stack escrita por otra persona.
Esta posible colisión de nombres es la causa de la importancia de tener control completo sobre los nombres de espacio en Java.

Cuando crea un fichero de código fuente para Java, se le conoce comúnmente como unidad de compilación. Cada unidad de compilación tiene que tener un nombre terminado .java, y dentro de la unidad de compilación puede haber una clase public que debe tener el mismo nombre que el fichero 

Puede haber sólo una clase public en cada unidad de compilación, de otro modo el compilador dará error. El resto de las clases en esa unidad de compilación, si hay otras, estarán ocultas del mundo exterior a ese paquete, porque no son public,y comprenden clases de "apoyo" para la clase principal public (pública). 


Cuando compila un fichero .java, obtiene otro fichero de salida con el mismo nombre pero de extensión .class para cada clase en el fichero .java

Un programa funcionando es un grupo de ficheros .class , que pueden ser empaquetados y comprimidos dentro de un fichero JAR (usando el archivador jar de Java). 

El intérprete de Java es responsable de encontrar, cargar e interpretar estos ficheros. 


Una librería:
	Es también un grupo de ficheros class. Cada fichero tiene una clase que es public (no está obligado de tener una clase public class, pero es lo típico), por lo que hay un componente para cada fichero. Si quiere decir que todos esos componentes (que están en su correspondiente fichero .java y .class) forman un todo, ahí es donde la palabra clave package entra en juego. 
Cuando dice:

	package mypackage; 

	Note que la convención para los nombres de paquete en Java es usar minúsculas, incluso para palabras intermedias

Al comienzo del fichero (si usa una sentencia package, debe aparecer al principio sin comentarios en el fichero), está indicando que esta unidad de compilación es parte de una librería denominada mypackage. O, dicho de otra forma, está diciendo que la clase public dentro de esta unidad de compilación está bajo la sombrilla del nombre mypackage, y si alguien quiere usarla tienen que especificar completamente el nombre de la clase o usar la palabra reservada import en combinación con mypackage. 



Supongamos que el nombre del fichero es MyClass.java. Esto quiere decir que puede haber una y solo una clase public en ese fichero, y el nombre de esa clase debe ser MyClass (respetando mayúsculas/minúsculas):

	package mypackage;
	public class MyClass {
	// . . .


si alguien quiere usar MyClass o, del mismo modo para cualquiera otra clase public en mypackage, tiene que usar la palabra reservada import para tener acceso al nombre o nombres en mypackage.

	mypackage.MyClass m = new mypackage.MyClass();

	La palabra import puede hacer esto más claramente:

	import mypackage.*;
	// . . .
	MyClass m = new MyClass();


Recordar que la declaración del paquete debe estar en la primera línea de código (sin considerar los comentarios como código).


- CREACIÓN DE NOMBRES DE PAQUETE ÚNICO:
Situar todos los ficheros .class de un paquete en particular en un solo directorio; esto es, usar la estructura jerárquica de ficheros del sistema operativo para su aprovechamiento. 

Reunir los ficheros de los paquetes en un solo directorio resuelve dos problemas: creación de nombres de paquetes únicos, y encontrar aquellas clases que pudieran estar enterradas en algún lugar de la estructura del directorio. El compilador obliga a esto, pero por convención:
		La primera parte del nombre del package es el nombre de dominio de Internet del creador de la clase, revertido.


La segunda parte de este truco es tomar como nombre de package un directorio de su máquina, así cuando el programa en Java se ejecute y necesite cargar el fichero .class, puede localizar el directorio donde el fichero .class reside. 
El intérprete de Java procede:
	 Primero, encuentra la variable de ambiente CLASSPATH (colocada por el sistema operativo, a veces por el programa de instalación que instala Java o una herramienta basada en Java de su máquina). 
	 CLASSPATH contiene uno o más directorios que son usados como raíz para la búsqueda de ficheros .class. Comenzando en esa raíz, el intérprete tomará el nombre del paquete y reemplazará cada punto con un paréntesis para generar la ruta desde la raíz del CLASSPATH (así, package foo.bar.baz se convierte en foo\bar\baz o foo/bar/baz o en alguna otra cosa, dependiendo de su sistema operativo). Esto es luego concatenado para varias entradas en el CLASSPATH.
	 Ahí es donde busca el fichero .class con el nombre correspondiente a la clase que está intentando crear.

----EJEMPLO----
considere nuestro nombre de dominio, que es oxen.com.ar Invirtiendo esto, ar.com.oxen Establece mi nombre global único para mis clases. 

Quiero crear una librería llamada simple, así terminaré con un nombre de paquete:

	Package ar.com.oxen.simple;

- CREANDO UN PAQUETE: 
La sentencia package tiene que ser la primera línea de código sin comentar en el fichero. 

	package ar.com.oxen.simple;
		public class Vector {
	   	public Vector() {
	   	   System.out.println("ar.com.oxen.util.Vector");
	   	}
	}


	package ar.com.oxen.simple;
	public class List {
	   public List() {
	      System.out.println(
	         "ar.com.oxen.util.List");
	   }
	}

Ambos ficheros son situados en el subdirectorio de mi sistema:

C:\DOC\JavaT\ar\com\oxen\simple
¿qué ocurre con la primera parte de la ruta? Eso es tomado en cuenta en la variable de ambiente CLASSPATH 
CLASSPATH=.;D:\JAVA\LIB;C:\DOC\JavaT
Observe que el CLASSPATH puede contener un número alternativo de rutas de búsqueda.

Hay una diferencia cuando se usan ficheros JAR. Debe poner el nombre del fichero JAR en el CLASSPATH, no solo la ruta donde se encuentra. Así, para un JAR llamado grape.jar su CLASSPATH incluiría:

CLASSPATH=.;D:\JAVA\LIB;C:\flavors\grape.jar


CONFLICTOS:
	¿Qué ocurre si 2 librerías son importadas vía * e incluyen los mismos nombres? 
	Mientras no escriba código que no cause conflictos es correcto, el conflicto ocurre si ahora intenta crear una clase que esta en ambos paquetes. El compilador nos obliga a ser más específicos:

		java.util.Vector v = new java.util.Vector();


IMPORTANTE:
	Siempre que cree un paquete, especifica implícitamente una estructura de directorio al dar nombre al paquete. El paquete debe residir en el directorio indicado por su nombre, el cual debe ser un directorio que se pueda buscar comenzando desde el CLASSPATH. 

-----------------HERENCIA-----------------------
Cada vez que creamos un objeto estamos haciendo herencia porque, aunque no indiquemos otra cosa, estamos heredando de Java el objeto Object.
Antes de la apertura del límite cuerpo de clase, pondremos la palabra clave "extends" seguida por el nombre de la clase base.

	class Animal {}
	class Perro extends Animal {}

Iniciar la clase base:
	Como ahora hay dos clases involucradas (la clase base y la clase derivada).

	Pero la herencia no es copiar la interfaz de la clase base.
	Cuando creamos un objeto de una clase derivada, este contiene dentro un sub-objeto de la clase base. Este sub-objeto es el mismo que si hubiésemos creado un objeto de la clase base. Lo que pasa es que es, desde fuera, el sub-objeto de la clase base está envuelto dentro del objeto de la clase derivada.

Java inserta automáticamente llamadas al constructor a la clase base en el constructor de la clase derivada. 

- CONSTRUCTORES CON ARGUMENTOS:
Si deseamos invocar a un constructor de la clase base que tiene un argumento, debemos escribir explícitamente las llamadas al constructor de la clase base usando la palabra reservada super y la lista apropiada de argumentos.

Antes de ejecutar cualquier código en el constructor, se debe invocar el constructor de la clase base o a otro constructor de la misma clase. Si no se especifica una llamada a otro constructor, el compilador generará una llamada al constructor sin argumentos de la clase base (si no existe, dará un error de compilación).


- MOLDES (CASTING):
El operador de molde se puede aplicar tanto a objetos como a tipos primitivos. Su sintaxis es la siguiente:
	(tipo)variable

Dicha expresión convierte la variable al tipo especificado.

- UPCAST:
	El aspecto más importante de la herencia es la relación expresada entre la nueva clase y la clase base.
	Como el upcast es implícito, a veces se diferencia del DOWNCAST llamándolo “CONVERSIÓN”

	La conversión de derivada a base es un movimiento ascendente en el diagrama de herencia, de ahí que hablemos de upcast, cast hacia arriba. Upcast es algo seguro porque se va desde un tipo más específico a un tipo más general. La única cosa que puede ocurrir a la interfaz de la clase DURANTE LA CONVERSIÓN ASCENDENTE ES QUE PUEDE PERDER MÉTODOS, NO GANARLOS.

- DOWNCAST:
	Si en tiempo de ejecución la instancia asociada a la variable no puede ser convertida, se dispara una ClassCastException.
	Java nos obliga colocar el operador de molde.

- PALABRA CLAVE FINAL:
	La palabra clave final tiene distintos significados, según el contexto, pero en general quiere decir esto no se puede cambiar.
	De acuerdo a donde se aplique, FINAL TIENE DISTINTOS EFECTOS: 
		- DATOS: Hace que el dato sea constante. La constante debe inicializarse antes de ser usada (no necesariamente en la declaración).
		- MÉTODOS: Evita que el método sea redefinido al aplicar herencia.
		- CLASES: Es igual al caso de los métodos, salvo que directamente no se permite heredar de esta clase.

	Notar que una variable final puede ser inicializada en cualquier lado, siempre y cuando su valor no cambie posteriormente.
	Notar que una clase no puede ser final y abstract a la vez.

---------------ESPECIFICADORES DE ACCESO EN JAVA-----------------
	public, protected y private se colocan delante de cada declaración para cada miembro de su clase, si se trata de un método o clase.
	Todos los elementos tienen especificado algún tipo de acceso.

	"Recordar que AL HEREDAR NO SE LE PUEDE DAR UN ACCESO MÁS RESTRICTIVO A UN MÉTODO REDEFINIDO que el que tiene en la clase base"


FRIENDLY:
	El acceso por defecto no tiene palabra reservada, pero es normalmente conocido como "friendly" (amiga). Significa que todo el resto de clases del paquete actual tienen acceso a un miembro friendly, pero para el resto de clases fuera del paquete, el miembro aparece como private (privado). 
	Ya que una unidad de compilación - un fichero - puede pertenecer a un solo paquete, todas las clases dentro de una unidad de compilación son automáticamente amigas (friendly) unas de otras. Así, los elementos friendly también se dice que tienen acceso de paquete. 
	El acceso Friendly le permite agrupar clases relacionadas en un paquete para que puedan interactuar fácilmente unas con otras. 

La clase controla qué código tiene acceso a sus miembros. 


El único modo de conceder acceso a un miembro es: 
	1.	Hacer el miembro public. Entonces todo el mundo, en cualquier lado, puede acceder a él. 
	2.	Hacer el miembro friendly al no indicar ningún especificador de acceso, y poniendo las otras clases en el mismo paquete. Entonces las otras clases pueden acceder al miembro. 
	3.	Cuando comentemos la herencia, una clase derivada puede acceder a un miembro protected igual que a un miembro public (pero no a miembros private). Puede acceder a los miembros friendly sólo si las dos clases están en el mismo paquete.
	4.	Proporcionar métodos para "acceso/mutación" (también conocidos como métodos "get/set") que leen y cambian el valor. Esta es la aproximación más civilizada en términos de POO.

PUBLIC: INTERFAZ DE ACCESO:
	Cuando usa la palabra reservada public, significa que la declaración del identificador que va detrás de public está disponible para todo el mundo, en particular para el programador cliente que usa la librería.

	//: dessert:Cookie.java
	// Crea una librería.
	package c05.dessert;
	public class Cookie {
	   public Cookie() {
	      System.out.println("Constructor de Cookie");
	      void bite() { System.out.println("bite"); }
	   }

	Recuerde, Cookie.java debe estar en un subdirectorio llamado dessert, en un directorio bajo c05 que debe estar bajo uno de los directorios del CLASSPATH.


	Ahora si crea un programa que utilice Cookie:

	//: Dinner.java
	// Usa la librería
	import c05.dessert.*;
	public class Dinner {
	   public Dinner() {
	      System.out.println("Constructor de Dinner");
	   }
	   public static void main(String[] args) {
	      Cookie x = new Cookie();
	      //! x.bite(); // No puede acceder
	   }
	}
 	
 	EL PAQUETE POR DEFECTO:
 		//: Cake.java
		// Accede a una clase en una
		// unidad de compilación separada.
		class Cake {
		   public static void main(String[] args) {
		      Pie x = new Pie();
		      x.f();
		   }
		}

		En un segundo fichero, en el mismo directorio:

		//: Pie.java
		// La otra clase.
		class Pie {
		   void f() { System.out.println("Pie.f()"); }
		}
		Normalmente pensaría que Pie y f( ) son friendly y por lo tanto no disponible para Cake . Son friendly - eso es correcto. La razón de que esté disponible en Cake.java es porque están en el mismo directorio y tienen nombre de paquete no explícito. Java trata ficheros así como si fueran parte del "paquete por defecto" para ese directorio, y por lo tanto friendly a otros ficheros de ese directorio.

PRIVATE: NO PUEDES TOCAR ESO!:
	La palabra reservada private significa que nadie puede acceder a ese miembro excepto la clase en sí, dentro de los métodos de la misma. 
	El acceso de paquete por defecto "friendly" a menudo proporciona una adecuado grado de ocultación; recuerde, un miembro "friendly" es inaccesible para el usuario del paquete. 

	//: IceCream.java
	// Demuestra la palabra clave "private".
	class Sundae {
	   private Sundae() {}
	   static Sundae makeASundae() {
	      return new Sundae();
	   }
	}
	public class IceCream {
	   public static void main(String[] args) {
	      //! Sundae x = new Sundae();
	      Sundae x = Sundae.makeASundae();
	   }
	}


	Esto muestra un ejemplo en el cual private viene bien: podría querer controlar como un objeto es creado y evitar que alguien acceda a un constructor en particular (o a todos). En el ejemplo de arriba, no puede crear un objeto Sundae a través de su constructor. Hay otro efecto en este caso: ya que el constructor por defecto es el único definido y es private, se evitará la herencia de esta clase.
	Cualquier método que está seguro que es sólo un método de ayuda para esa clase puede ser private, prohibiéndose así de cambiar o remover el método.
	Lo mismo para un campo private dentro de una clase.

	Recordar que los especificadores de acceso aplican a las clases, no a las instancias, por lo que un objeto puede acceder a los miembros privados de otro objeto de la misma clase.

PROTECTED: "ALGO PARECIDO A FRIENDLY":
	Significa "esto es privado en lo que al usuario de la clase se refiere, pero está disponible para cualquiera que herede esta clase o cualquier otro en el mismo grupo de miembros".
	La mejor dirección o sentido a tomar es dejar los datos miembros privados.
	y permitir un acceso controlado a los herederos de la clase a través de métodos protected. 
	Recordar que, a pesar de su nombre, protected es más permisivo que “friendly


----------------------INTERFAZ E IMPLEMENTACIÓN------------------
El control de acceso está relacionado con la ocultación de la implementación. Envolver datos y métodos dentro de clases combinado con la ocultación de la implementación es con frecuencia llamado encapsulamiento.

	El control de acceso crea fronteras dentro de un tipo de datos por dos importantes razones:
		1) Establecer lo que el programador cliente puede y no puede usar. Puede construir mecanismos internos a la estructura sin preocuparse de que los programadores cliente accidentalmente traten las partes internas como parte de la interfaz que deberían usar. 
		2) Separar la interfaz de la implementación. Si se usa la estructura en un conjunto de programas, pero los programadores cliente no pueden hacer nada aparte de enviar mensajes a la interfaz pública, entonces usted puede cambiar cualquier cosa que no sea pública ("friendly", protected, o private) sin requerir modificaciones al código del cliente. 


------------------------ACCESO A LAS CLASES------------------------
Los especificadores de acceso pueden también ser usados para determinar las clases de una librería que estarán disponibles para los usuarios de esa librería. Si quiere que una clase esté disponible para un programador cliente, coloque la palabra public en algún lugar antes del la llave de apertura del cuerpo de la clase.

public class Widget {}
ahora si el nombre de su librería es mylib cualquier programador cliente puede acceder a Widget diciendo

import mylib.Widget;

o

import mylib.*;


restricciones extra: 
1.	Puede haber solo un una clase public por unidad de compilación (fichero), sino tirará error. La idea es que cada unidad de compilación tiene una única interfaz pública, representada por esa clase public.
2.	El nombre de la clase public debe ser exactamente el mismo que el del fichero que contiene la unidad de compilación, distinguiendo mayúsculas de minúsculas.
3.	Es posible, aunque no habitual, tener una unidad de compilación sin clases public. En ese caso, puede llamar al fichero como más le guste.
