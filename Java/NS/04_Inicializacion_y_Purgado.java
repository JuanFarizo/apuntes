
------------------------INICIALIZACION Y PURGADO-----------------------
Son dos de los elementosd estabilidad:

El constructor garantiza la inicialización:
	Si una clase tiene un constructor Java invocará automáticamente ese constructor cuando el objeto es creado.
El nombre del constructor es el mismo que el de la clase ¡¡¡EXACTAMENTE IGUAL!!!. Es lógico que así sea invocado durante la inicialización:
	
	class Roca {
	   Roca () { // Este es el constructor
	      System.out.println("Creando Roca)");
	   }
	}

Como cualquier otro método los constructores pueden tener argumentos que permiten especificar como se ha de crear el objeto. Los argumentos del constructor proporcionan al programador un medio parametrizar la creación de objetos. 

La regla habitual de poner en minúscula la primera letra del nombre de los métodos no se aplica a los constructores, ya que estos deben tener exactamente con el nombre de su clase. 

El constructor es un método atípico ya que no devuelve ningún valor.

Recordar que los constructores no se heredan como métodos normales. Se deben definir en cada clase. No podemos usar un constructor de una clase base para crear un objeto no base

------------------------SOBRECARGA DE MÉTODOS-----------------------
Cuando se crea un objeto se le asigna un nombre a una zona de almacenamiento. A menudo una simple palabra tiene más de un posible significado, es decir, está sobrecargada.

En Java (y en C++) hay otra razón que obliga a la sobrecarga en los nombres de los métodos.

. ¿Pero qué sucede si se desea poder construir un objeto en más de un modo diferente?
Ambos son constructores por lo que deben tener el mismo nombre: el nombre de la clase. Por lo tanto, para la sobrecarga de métodos es esencial que mismo nombre pueda ser usado por dos procedimientos con argumentos diferentes. La sobrecarga de métodos es necesaria para los constructores y en general es un mecanismo conveniente que puede usarse con cualquier método. 

Decidir entre métodos sobrecargados :
¡¡¡¡¡¡¡¡¡¡CADA MÉTODO DEBE TENER UNA LISTA DE ARGUMENTOS DIFERENTE!!!!!!!!!!!

Los métodos sobrecargados son completamente diferentes y su enlace se produce en tiempo de compilación. No tienen nada que ver con el polimorfismo, el cual es dinámico.

------------------------SOBRECARGA CON PRIMITIVA-----------------------
Una primitiva puede ser elevada de modo automático a un tipo más general lo que puede dar lugar a una cierta confusión cuando se combina con la sobrecarga de métodos. 
Se debe tener muy en cuenta que cuando se trata de una conversión a un tipo inferior (por lo que se puede perder información) el compilador fuerza a que la transformación se haga de modo explícito. 

------------------------CONSTRUCTORES PREDETERMINADOS-----------------------
el constructor predeterminado no tiene argumentos y se utiliza construir "objetos vainilla". Si se crea una clase que no tenga constructores, el compilador generará automáticamente un constructor predeterminado.

Recordar que el constructor por defecto (sin argumentos) se genera si y sólo si no se definió otro. Es decir que si definimos un constructor, el por defecto no se genera de forma automática.

------------------------LA PALABRA CLAVE THIS-----------------------
La palabra clave this - que puede ser usada únicamente dentro de un método - devuelve la referencia al objeto el que el método ha sido invocado.
Se puede usar esta referencia como cualquier otra referencia a un objeto. Conviene observar que, si se invoca un método de una clase desde otro método de la misma clase, no es necesario usar this ya que se puede invocar el método directamente.

!!!!!!!!!!!SE RECOMIENDA LA NO UTILIZACIÒN DE LA PALABRA CLAVE THIS EN LAS CLASES¡¡¡¡¡¡¡¡¡¡¡¡¡¡

	class Melocoton {
	   void recoger() { /*...*/ }
	   void pelar() { recoger(); /*...*/ }
	}

La palabra clave this se usa únicamente en aquellos casos especiales en los que es necesita usar una referencia explícita al objeto que se está manipulando. Por ejemplo, ES USANDO FRECUENTEMENTE EN LA CLÁUSULA return CUANDO SE QUIERE DEVOLVER UNA REFERENCIA AL OBJETO EN USO

	public class Hoja {
	   int i;
	   Hoja incremento() {
	      i++;
	      return this;
	   }
	}


    public static void main(String[] args) {
    	Hoja x = new Hoja();
		x.incremento().incremento().incremento().print();
    }

Como incremento() devuelve la referencia al objeto en uso usando la palabra clave this se pueden realizar varias operaciones sobre el mismo objeto de un modo sencillo. 


-----------INVOCACIÓN DE CONSTRUCTORES DENTRO DE CONSTRUCTORES---------------
DENTRO DE UN CONSTRUCTOR, this() toma otra significado cuando se le añade una lista de argumentos. En este caso REPRESENTA UNA LLAMADA EXPLÍCITA AL CONSTRUCTOR QUE TIENE LOS MISMOS ARGUMENTOS QUE LOS INCLUIDOS EN LA LISTA. Proporciona por lo tanto un medio directo de invocar otros constructores.

------------SIGNIFICADO DE STATIC------------
En los métodos static no existe this. No es posible invocar un método no-static desde un método static (aunque lo contrario sí es posible) y se puede invocar un método static usando la clase, sin objeto alguno. 

¡¡¡¡¡IMPORTANTE!!!!
Definiendo un método static dentro de una clase se puede acceder a otros métodos static y a campos static. Con un método static no es posible enviar un mensaje a un objeto ya que no existe una referencia this asociada
¡¡¡¡¡IMPORTANTE!!!!



---------PURGADO: FINALIZACIÓN Y RECOLECCIÓN DE BASURA--------------
Java proporciona un método llamado finalize() que puede ser definido dentro de una clase.

Cuando el recolector de basura está listo para liberar la zona de memoria usada por un objeto invoca en primer lugar su finalize() y solo en el siguiente ciclo de recolección de basura reclamará la memoria del objeto. Por lo tanto si se usa finalize() es posible realizar alguna operación de limpieza importante durante la recolección de basura.

Recolección de basura no es lo mismo que destrucción.

Pongamos el ejemplo de un objeto se pinta a si mismo en la pantalla del ordenador al ser creado. Si la imagen no es borrada explícitamente de la pantalla, puede que el objeto nunca llegue a ser purgado del sistema. Solo si se introduce dentro de finalize() las instrucciones de borrado pertinentes, la imagen será borrada cuando el objeto sea enviado a la basura, de otro modo la imagen permanecerá pintada en la pantalla.

ES POSIBLE QUE LOS OBJETOS NO SEAN PROCESADOS POR EL RECOLECTOR DE BASURA:
Si un programa nunca llega a un punto en el que los recursos disponibles empiecen a escasear, el espacio ocupado por los objetos no es liberado. Recordar que no existe forma de forzar la recolección de basura. System.gc() solamente “recomienda” al recolector que actúe, pero este no está obligado a hacerlo.


¿Para qué sirve finalize()?

La recolección de basura afecta solo a la memoria.  Cualquier actividad relacionada con la recolección de basura, en particular el método finalize(), debe ocuparse únicamente de la memoria y de su liberación.  

Esto no significa que, si un objeto contiene otros objetos, finalize() debe eliminar explícitamente todos estos objetos. El método finalize() se necesita únicamente en aquellos casos especiales en los que un objeto reserve espacio para si de algún modo que no sea la creación de otros objetos. El metodo finalize() no se usa con mucha frecuencia.

--------------EL PURGADO ES NECESARIO------------------
Simplificando que Java no necesita destructores por que tiene un recolector de basura. La presencia de un recolector de basura no elimina la necesidad o utilidad de los destructores. 
Si se quiere realizar algún tipo de purgado, además de la liberación de espacio, se debe hacer de modo explícito llamando al método apropiado desde Java.

- El recolector de basura invoca a finalize() sólo una vez.
- El método finalize() se puede invocar directamente, aunque esto no fuerza su recolección

----------------INICIALIZACIÓN DE MIEMBROS---------------
Java hace todo lo necesario para garantizar que las variables sean inicializadas correctamente antes de que sean usadas. En el caso de que la variable esté definida localmente dentro de un método, el compilador generará un mensaje de error.

	void f() {
	   int i;
	   i++;
	}

Se obtiene un mensaje de error diciendo que i no pudo ser inicializada.

Las cosas son un poco diferentes si la primitiva es un dato miembro. Como cualquier método puede iniciar o use el dato, no seria practico obligar al usuario a inicializarlo con un valor adecuado antes de utilizarlo.

Java define una referencia a un objeto dentro de una clase sin inicializarla con un objeto, la referencia toma el valor especial null 

El lector puede comprobar que, aunque no se especifique ningún valor, todas las variables son inicializadas. Por lo tanto, no hay peligro de trabajar con variables no inicializadas. 

ESPECIFICAR LA INICIALIZACIÓN 
class Medida {
   boolean b = true;
}
No solo las primitivas, cualquier objeto puede ser inicializado del mismo modo. 

class Medida {
	Profundidad o = new Profundidad();
	boolean b = true;
}


Si se intenta usar o sin haberle inicializado, se obtiene en tiempo de ejecución un error que recibe el nombre de excepción (exception).
También se puede incluir la llamada a un método en la inicialización:

class CInit {
   int i = f();
   //...
}

El método puede tener argumentos, pero los argumentos no pueden ser miembros de la clase que todavía no hayan sido inicializados. 

INICIALIZACIÓN EN EL CONSTRUCTOR 
El constructor se puede usar realizar la inicialización. Se puede hacer llamadas a métodos y realizar otras acciones en tiempo de ejecución determinar los valores iniciales.

class Contador {
   int i;
   Contador() { i = 7; }
   // . . .
}

La variable i será inicializada primero con 0 y luego con 7. Este principio se aplica a todos los tipos primitivos y a las referencias a objetos, incluso en los casos en que se hace una inicialización explícita en el momento de la definición. Por esta razón, el compilador no obliga a inicializar elementos en el constructor o antes de que sean usados: la inicialización está, por lo tanto, garantizada. 


INICIALIZACIÓN DE DATOS ESTÁTICOS 
Si una primitiva no es inicializada explícitamente, recibe el valor inicial estándar que le corresponda. Si es una referencia a un objeto, se le asigna el valor null a menos que se cree un objeto y se le asocie dicha referencia.

Los datos estáticos son inicializados únicamente si es necesario. Además, serán inicializados únicamente una vez: la primera que un objeto de la clase sea creado ( o cuando se produzca el primer acceso estático). Después los objetos estáticos no vuelven a ser inicializados. 
Los miembros estáticos son, pues, los primeros en ser inicializados, si no lo han sido ya como consecuencia de la creación un objeto anterior, y a continuación se inicializan los datos no estáticos. 


INICIALIZACIÓN ESTÁTICA EXPLÍCITA 
Java cuenta con una "construcción estática" que permite agrupar varias inicializaciones de datos static en un solo lugar dentro de una clase. Esta construcción recibe a veces el nombre de bloque estático (static block). 

	class Cuchara {
	   static int i;
	   static {
	      i = 47;
	   }
	   // . . .
Este fragmento de código se ejecuta tan solo una vez: la primera vez que se cree un objeto de esa clase o la primera vez que se acceda a un miembro estático de la clase  (incluso cuando no se llegue a crear un solo objeto de esa clase). 


-----------------INICIALIZACIÓN DE ARREGLOS---------------------
Un arreglo no es más que una secuencia de primitivas u objetos, todos del mismo tipo y agrupados bajo un único identificador. 
Los arreglos se definen y se utilizan haciendo uso del operador indexación (indexing operator) [ ].

Un arreglo se puede definir, simplemente, añadiendo un par de paréntesis cuadrados detrás del nombre del tipo:
int[] a1;

También se pueden poner los paréntesis detrás del identificador: el efecto es el mismo:

int a1[];


Después de la definición del arreglo lo único que se tiene es una referencia a un arreglo, y además, no se reservará espacio alguno para contener el arreglo. Para reserva espacio para el arreglo se necesita escribir una expresión de inicialización. La inicialización de un arreglo puede aparecer en cualquier lugar dentro del código, pero también se puede usar una tipo especial de expresión de inicialización que tiene que hacerse en el mismo lugar donde se crea el arreglo. Este tipo especial de inicialización consiste en un conjunto de valores encerrados entre llaves. 

int[] a1 = { 1, 2, 3, 4, 5 };

asignar un arreglo a otro, lo que es una operación permitida en Java. Lo que se está copiando realmente en este caso es una referencia:

a2 = a1;


Todos los arreglos tiene un miembro intrínseco (tanto si son arreglos de objetos como si son arreglos de primitivas), que puede examinar - pero no modificar -, que contiene el número de elementos del arreglo. Este miembro es length.


	//: Arrays.java
	// Arreglos de primitivas.
	public class Arrays {
	   public static void main(String[] args) {
	      int[] a1 = { 1, 2, 3, 4, 5 };
	      int[] a2;
	      a2 = a1;
	      for (int i = 0; i < a2.length; i++)
	         a2[i]++;
	      for (int i = 0; i < a1.length; i++)
	         System.out.println(
	            "a1[" + i + "] = " + a1[i]);
	   }
	}
Para crear nuevos elementos del arreglo se usa simplemente new. En este ejemplo, new funciona también creando un arreglo de primitivas:

	//: ArrayNuevo.java
	// Creación de arreglos con new.
	import java.util.*;

	public class ArrayNuevo {
	   static Random rand = new Random();
	   static int pRand(int mod) {
		   return Math.abs(rand.nextInt()) % mod + 1;
	   }
	   public static void main(String[] args) {
		      int[] a;
		      a = new int[pRand(20)];
		      System.out.println(
			    "num. elementos de a = " + a.length);
			  for(int i = 0; i < a.length; i ++)
			    System.out.println(
			      "a[" + i + "] = " + a[i]);
	   }
	}
 
 Los elementos del arreglo que son de un tipo primitivo son inicializadas automáticamente con sus valores "vacíos" (para números y char este valor es cero y para boolean es false).

 Si se está trabajando con arreglos de objetos que no sean primitivas, es necesario usar siempre el operador new. Vuelve a aparecer aquí el tema de la referencia ya que lo que realmente se crea es un arreglo de referencias. Así, por ejemplo, con el tipo wrapper Integer, que es una clase y no una primitiva:
	
	//: ArrayClassObj.java
	// Creación de un arreglo de objetos 
	// de tipo no primitivo.
	import java.util.*;

	public class ArrayClassObj {
	   static Random rand = new Random();
	   static int pRand(int mod) {
	      return Math.abs(rand.nextInt()) % mod +1;
	   }
	   public static void main(String[] args) {
	      Integer[] a = new Integer[pRand(20)];
	      System.out.println(
	         "num. elementos de a = " + a.length);
	      for (int i = 0; i < a.length; i++) {
	         a[i] = new Integer(pRand(500));
	         System.out.println(
	            "a[" + i + "] = " + a[i]);
	      }
	   }
	}

	Lo único que se tiene es un arreglo de referencias, y la inicialización, por lo tanto, no está completa hasta que no se inicializa la referencia misma creando un nuevo objeto Integer.

	a[i] = new Integer(pRand(500));

Si el objeto no es creado, se obtendrá una excepción en tiempo de ejecución al intentar leer la posición vacía del arreglo. 


También se pueden inicializar arreglos usando una lista de elementos encerrada entre llaves. Existen dos formas diferentes:

//: ArrayInit.java
// Inicialización de arreglos.
public class ArrayInit {
   public static void main(String[] args) {
      Integer[] a = {
         new Integer(1),
         new Integer(2),
         new Integer(3),
      };
      
      Integer[] b = new Integer[] {
         new Integer(1),
         new Integer(2),
         new Integer(3),
      };
   }
}

La coma al final de la lista de los inicializadores es opcional; su única función es hacer más sencillo el mantenimiento de listas largas. 


ARREGLOS BIDIMENSIONALES

Los arreglos bidimensionales de Java se crean de un modo muy similar al de C++ (con reserva dinámica de memoria). 
Una matriz se puede crear directamente en la forma:
	int [][] mat = new int[3][4];

o bien se puede crear de modo dinámico dando los siguientes pasos:
	•	Crear la referencia indicando con un doble corchete que es una referencia a matriz,
int[][] mat;
	•	Crear el vector de referencias a las filas,
mat = new int[nfilas][];
	•	Reservar memoria para los vectores correspondientes a las filas,
	for (int i=0; i<nfilas; i++)
	   mat[i] = new int[ncols];
