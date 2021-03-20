------------------JAVA-------------------
Debemos tratar todo como un objeto, de manera que usaremos una única sintaxis en todo lugar. Aunque tratemos todo como un objeto, el identificador que manejamos es realmente una "referencia" a un objeto.

String s;

Pero aquí solo hemos creado una referencia, no un objeto. 

 Si enviáramos un mensaje a s en este momento, nos daría un error (en tiempo de ejecución) por que s no está conectada a nada.

 Recordar que los objetos de tipo String nunca se modifican. Los métodos que realizan alguna modificación al contenido siempre crean una instancia nueva.

---------------CREANDO OBJETOS--------------------
 Cuando creamos una referencia, queremos conectarle un objeto. Lo haremos, en general, con la palabra clave new. 
 new viene a decir "crea un nuevo objeto de ese tipo".

String s = new String ("asdf");

-----------------DONDE RESIDE EL ALMACENAMIENTO-----------
Hay 6 sitios donde se almacenan datos:
	1) Registros:
		Es el almacenamiento más rápido, ya que está situado dentro del procesador. El número de registros está muy limitado, y por eso los utiliza el compilador de acuerdo con sus necesidades.
	2) La pila (Stack):
		Situada en la memoria RAM, pero bajo el control directo del procesador a través del puntero de pila. El puntero de pila se mueve hacia abajo para crear nuevos elementos en la memoria, y hacia arriba para liberar dicha memoria. Después de los registros, es la forma más rápida y eficiente de situar datos.
	3) El montón (Heap):
		Es el grueso de la memoria de propósito general (también RAM), donde estarán todos los objetos Java. El compilador no necesita saber cuanta capacidad necesita para el montón, o cuanto tiempo debe permanecer algo en él. Cuando quiera que necesitemos crear un objeto, solo tendremos que escribir el código para crearlo, usando new, y será almacenado en el montón, cuando se ejecute dicho código. Es más lento situar datos en el montón que en la pila.
	4) Almacenamiento estático:
		Con "estático" queremos decir "en una ubicación fija" (también en la RAM). El almacenamiento estático contiene datos que estarán disponibles durante todo el tiempo de ejecución de un programa. Podemos utilizar la palabra clave static para especificar que un elemento en particular de un objeto es estático
	5) Almacenamiento constante:
		Cuando estamos seguros que dichos valores nunca podrán cambiar. 
	6) Almacenamiento no RAM:
		Es para datos totalmente ajenos al programa, que pueden existir cuando el programa no se está ejecutando, fuera del control de éste. Los dos ejemplos principales de esto son los "objetos fluyentes", es decir, aquellos objetos que se convierten en flujos de bits, generalmente para ser enviados a otra máquina, y los "objetos persistentes", que son aquellos que se sitúan en disco para conservar su estado cuando el programa ha terminado. 


---------------TIPOS PRIMITIVOS--------------------
Java determina el tamaño de cada tipo primitivo. Este tamaño no variará de una máquina a otra


Primitivo Tamaño	Mínimo	Máximo			Tipo envoltorio
boolean	-----	-----	-----					Boolean
char	16 bits	Unicode 0	Unicode 2^16 - 1	Character
byte	8 bits	-128	+127					Byte
short	16 bits	-2^15	+2^15 - 1				Short
int		32 bits	-2^31	+2^31 - 1				Integer
long	64 bits	-2^63	+2^63 - 1				Long
float	32 bits	IEEE754	IEEE754					Float
double	64 bits	IEEE754	IEEE754					Double
void	-----	-----	-----					Void

Todos los tipos numéricos son con signo, no existen tipos sin signo. 


Los tipos primitivos de datos tienen también sus tipos "envoltorio" (wrapper). Esto significa que si queremos crear un objeto no primitivo en el montón (Heap) para representar un tipo primitivo utilizaremos su envoltorio asociado.

Valores por defecto para miembros primitivos:
	Tipo Primitivo  Valor por defecto
	boolean			false
	char			'\u0000' (null)
	byte			(byte) 0
	short			(short) 0
	int				0	
	long			0L
	float			0.0F
	double			0.0D

Notemos que estos valores por defecto son los que nos garantiza Java cuando las variables son utilizadas como miembros de una clase. Esto nos asegura que las variables miembro de tipos primitivos siempre se inicializan.
Esta garantía no se aplica a variables "locales", aquellas que no son campos de una clase.	Tener en cuenta que las variables locales deben ser inicializadas.

-----------------ARREGLOS EN JAVA-------------------
En Java está asegurado que los arreglos se inicializan y que no se puede acceder a ellos fuera de su rango. Java realiza:
a) Un chequeo de rango.
b) Verifica el índice.

CUANDO CREAMOS UN ARREGLO DE OBJETOS, EN REALIDAD ESTAMOS CREANDO UN ARREGLO DE REFERENCIAS, cada una de las cuales se inicializa a un valor especial con su propia palabra clave: null. En Java null significa que la referencia en cuestión no está apuntando a ningún objeto

También podemos crear arreglos de tipos primitivos. De nuevo, el compilador nos garantiza la inicialización, poniendo a cero la memoria de dicho arreglo.
Los arreglos pueden ser asignados a objetos de la clase Object y los métodos de Object pueden ser utilizados con arreglos.


Arreglos bidimensionales
En Java una matriz es un vector de vectores fila, o más en concreto un vector de referencias a los vectores fila. Con este esquema, cada fila podría tener un número de elementos diferente.

-----------------NUNCA NECESITAMOS DESTRUIR  UN OBJETO-------------------
Java simplifica enormemente la tarea, haciendo el trabajo sucio por nosotros.

El ámbito:
	La mayoría de los lenguajes procedurales contemplan el concepto de "alcance" o "ámbito". Esto determina la visibilidad y el tiempo de vida de los nombres definidos sin un determinado ámbito.

El ámbito queda determinado por la colocación de llaves {}. 

-----------------EL ÁMBITO DE LOS OBJETOS-----------------
Cuando creamos un objeto usando new, lleva implícito el fin de su ámbito. Si hacemos:
	{
	   String s = new String ("una cadena");
	} /* fin del ámbito */

La referencia s se desvanece al final del ámbito. Sin embargo, el objeto String al que apuntaba s aun ocupa memoria. En esta porción de código no hay forma de acceder al objeto porque la única referencia a él esta fuera de ámbito.
Esto ocurre porque los objetos creados con new perduran tanto como queramos.
Java tiene un recolector de basura, el cual vigila todos los objetos creados con new y elimina aquellos que ya no son referenciados.


-----------------CREAR NUEVOS TIPOS DE DATOS: CLASES-----------------
La palabra clave class va seguida del nombre del nuevo tipo.

class UnNombredeTipo { /* aquí iría el cuerpo de la clase */ }

Esto introduce un nuevo tipo, luego a partir de ahora podremos crear objetos de ese tipo usando new:

	UnNombredeTipo a = new UnNombredeTipo ();


-----------------CAMPOS Y MÉTODOS-----------------
Cuando definimos una clase, podemos poner dos tipos de elementos: datos o variables miembros (es decir, campos) y funciones miembros (típicamente llamadas métodos).

Un dato miembro es un objeto de un tipo con el que podemos comunicarnos vía referencia. También puede ser de uno de los tipos primitivos (en cuyo caso no es una referencia). Si es una referencia a un objeto, debemos inicializarla para conectarla a dicho objeto (usando new, como hemos visto antes) en una función especial llamada constructor. Si es un tipo primitivo, podemos inicializarlo directamente en la parte de definiciones de la clase.


Podemos asignar valores a los datos que son miembro, pero antes debemos saber como referirnos a los miembros de una clase. Consiste en poner el nombre de la referencia al objeto:
	
	ReferenciaaObjeto.miembro

	class SoloDatos   {
	   int i;
	   float f;
	   boolean b;
	}

	SoloDatos d = new SoloDatos ();
	d.i = 47;
	d.f = 1.1f;
	d.b = false;


También es posible que nuestro objeto contenga otros objetos que contengan datos que queramos modificar. Para eso solo tenemos que "conectar con puntos":

	miAvion.tanqueIzquierdo.capacidad = 100;


Tener en cuenta que las variables locales deben ser inicializadas.



-----------------MÉTODOS, ARGUMENTOS Y VALORES DE RETORNO-----------------
En Java los métodos determinan los mensajes que pueden recibir los objetos. 

	tipodeRetorno nombredeMetodo (/* lista de argumentos */ ){
	   /* cuerpo del Método */
	}

El tipo de retorno es el tipo del valor que nos devuelve el método después de llamarlo. 
La lista de argumentos da los tipos y los nombres para la información que queremos pasar al método. 
El nombre del método junto a la lista de argumentos definen el método de modo único.


Los métodos en Java se pueden crear solo como parte de una clase. Un método solo puede ser invocado por un objeto (Los métodos static pueden ser invocados por la clase, sin un objeto), y ese objeto podrá ejecutar el método invocado. 

Podemos llamar un método nombrando el objeto, seguido de un punto y del nombre del método con su lista de argumentos, como este: 
	nombreObjeto.nombreMetodo(arg1,arg2,arg3). 



Supongamos que tenemos un método f() que no tiene argumentos y devuelve un valor de tipo int:
int x = a.f();

El tipo del valor de retorno debe ser compatible con el de x. 
A este acto de llamar a los métodos se le llama enviar un mensaje a un objeto. El mensaje es f() y el objeto es a. La programación orientada a objetos se suele resumir como "enviar mensajes a los objetos". 


-----------------LISTA DE ARGUMENTOS-----------------
La lista de argumentos de un método especifica que información le pasamos al mismo. 
Esta información toma forma de objetos. Lo que hemos de especificar en la lista de argumentos serán los tipos de objetos a pasarle y el nombre que usaremos para cada uno de ellos.
Como en cualquier otra situación en Java donde parezca que manipulamos objetos en realidad estaremos pasando referencias (Con la excepción de los antes mencionados tipos de datos "especiales" boolean, char, byte, short, int, long, float y double. En general, podemos pensar que pasamos objetos, lo que en realidad significa que pasamos referencias a objetos.). 

	
	int storage (String s)  {
	   return s.length() * 2;
	}

return: que hace dos cosas. 
Primero: significa "abandona el método, ya está hecho". 
Segundo: si el método produce un valor, éste es devuelto después de dicha instrucción.

Podemos devolver valores del tipo que queramos, pero si no queremos devolver ninguno, deberemos indicarlo devolviendo void. 

void nothing()  {  return;  }
void nothing2()  { }


Cuando el tipo de retorno es void, la palabra clave return se usa solo para salir del método, y por tanto es innecesaria cuando se llega al final del método. Podemos salir del método en cualquier punto, pero si devolvemos un valor no-void el compilador nos obligará (con un mensaje de error) a devolver el tipo de valor adecuado, independientemente del punto en que devolvamos. 


-----------------PASAJE POR VALOR-----------------
1) Java pasa todo por valor: Cuando se pasan tipos primitivos a un método, se obtiene una copia distinta del dato de tipo primitivo. Cuando se pasa una referencia a un método, se obtiene una copia de la referencia. Ergo, todo se pasa por valor. 

2) Java pasa los tipos primitivos por valor (sin argumentos aquí), pero los objetos se pasan por referencia. Ya que no se obtiene una copia local del objeto cuando se lo pasa a un método, claramente los objetos no son pasados por valor.


Recordar que al modificar un objeto pasado como parámetro estamos modificando el objeto del método que lo llamó (el contenido).


-----------------VISIBILIDAD DE UN NOMBRE-----------------
Si mi nombre de dominio es oxen.com.ar nuestra librería de utilidades para base de datos se llamaría ar.com.oxen.utility.database (notar que no se puede usar el guión alto). 
Tras dar la vuelta al nombre de dominio, los puntos representan subdirectorios. 

Nuestros ficheros tienen automáticamente su propio espacio de nombres, y cada clase en un fichero debe tener un identificador único.

-----------------USAR OTROS COMPONENETES-----------------
Cuando queramos usar clases predefinidas en nuestros programas, el compilador ha de saber como encontrarlas.

La palabra clave import:
Import indica al compilador que nos la traiga de un package, que es una librería de clases.

La mayor parte del tiempo utilizaremos componentes de las librerías estándar de Java que vienen con el compilador. 

	import java.util.ArrayList;

Sin embargo, util contiene varias clases y podemos querer utilizar varias de ellas sin tener que declararlo explícitamente. Lo haremos fácilmente con "*" para indicar un comodín:
	import java.util.* ;

-----------------LA PALABRA CLAVE STATIC-----------------
Normalmente cuando creamos una clase estamos describiendo que aspecto tienen los objetos de esa clase y como se comportarán. Realmente no tenemos nada hasta que no creamos un objeto de esa clase con new, y en este punto se creará el almacenamiento de sus datos y sus métodos podrán ejecutarse. 

Pero hay dos situaciones en las que no nos basta con esto:
1) Una es cuando queremos tener una determinada variable en particular en solo una posición de memoria, independientemente del número de objetos creados, o incluso si no hay objetos creados.
2) La otra es si necesitamos un método que no esté asociado con ningún objeto en particular de esta clase. Es decir, necesitamos un método al que podamos llamar incluso si no hay objetos creados. Podemos llevar a cabo estos dos efectos con la palabra clave static.

Cuando digamos que algo es static, querremos decir que las variables o métodos no están vinculados a ninguna instancia de objetos de esta clase en particular. Incluso si no hemos creado un objeto de esa clase podemos llamar un método static o acceder a datos static.

Para hacer datos miembros o métodos static, solo tenemos que colocar la palabra clave antes de la definición. 

	class StaticTest   {
	   static int i = 47;
	}

	StaticTest st1 = new StaticTest();
	StaticTest st2 = new StaticTest();

Ahora incluso si creamos dos objetos StaticTest, solo habrá una posición de almacenamiento para StaticTest.i. Ambos objetos compartirán la misma i
Tanto st1.i como st2.i tienen el mismo valor, 47

Hay dos formas de referirnos a las variables static. La ya indicada, llamarla vía objeto, poniendo por ejemplo st1.i. También podemos referirnos a ella directamente con su nombre de clase, algo que no podríamos hacer con variables de clase no-static

	StaticTest.i++;

	Ahora, tanto st1.i como st2.i valen 48. 


	class StaticFun   {
   		static void incr()   {  StaticTest.i++;  }
	}

Podemos referirnos a un método static tanto empleando un objeto, como cualquier otro método, o con una sintaxis especial NombredeClase.metodo().

	StaticFun sf = new StaticFun();
	sf.incr();
	StaticFun.incr();


Un uso importante de métodos static es permitirnos llamar a ese método sin crear un objeto. Esto es esencial, como veremos, para definir el método main() que es el punto de entrada para ejecutar una aplicación.

---------------------PRIMER PROGRAMA JAVA-----------------

	import java.util.*;
	public class HelloDate   {
	    public static void main(String[] args) {
	        System.out.println("Hola, hoy es: ");
	        System.out.println(new Date());
	    }
	}

Al principio de cada archivo de programa, debemos colocar la instrucción import para traernos cualquier clase extra que necesitemos para nuestro código en este fichero.

Volviendo al principio, seleccionando java.lang y después System, veremos que la clase System tiene varios campos, y que si seleccionamos out descubriremos que es un objeto static PrintStream. Al ser static no necesitamos crear nada. El objeto out siempre está ahí y solo tenemos que utilizarlo.


