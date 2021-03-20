 Dos zonas diferentes de memoria que utiliza la JVM (Java Virtual Machine) de Java.

1) Stack Memory:
	Se utiliza para:
		- almacenar variables locales
		- variables de referencia
		- parámetros y valores de retorno
		- resultados parciales. 
		- También se utiliza para llevar el control de la invocación y retorno de los métodos.


Cada thread en la JVM tiene asignado un stack privado desde el momento de su creación.

2) Heap Memory: Es un espacio de memoria dinámica que se crea al inicio de la máquina virtual y es único
	- almacena objetos y sus variables de instancia
El administrador de este espacio de memoria dinámica es el sistema de administración de almacenamiento automático o más conocido como Garbage Collector 


Ejemplo:

	public class EjemploStackYHeap{

	    int atributoEntero;
	    String atributoCadena;    

	    public void setAtributoEntero (int x) {
	       atributoEntero = x;
	    }
	          
	    public void setAtributoCadena(String s) {
	      atributoCadena = s;

	    }
	    
	    public static void main (String[] args){
	      int enteroLocal = 5;
	      String cadenaLocal = "atributo";
	                      
	      EjemploStackAndHeap e = new EjemploStackAndHeap();
	      e.setAtributoEntero (enteroLocal);
	      e.setAtributoCadena (cadenaLocal);
	                        
	   }
	}


Ocurriría lo siguiente:


Comienza la ejecución con main.
- Se declara e inicializa una variable de tipo primitivo, enteroLocal.
- Se almacena esta variable y su valor en el Stack.
- Se declara e inicializa una variable de tipo de referencia.
- La variable se crea en el Stack. El objeto se crea en el Heap.
- La variable apunta al objeto String en el Heap.
- Se llama al constructor EjemploStackAndHeap(). El constructor crea en el Heap el espacio para el objeto y sus atributos. Se inicializan los valores según el tipo de los atributos. En el Stack se crea la variable de referencia e que apunta al objeto en Heap.
- Se llama a setAtributoEntero con el parámetro enteroLocal. La variable del método setAtributoEntero x recibe el valor de enteroLocal. Se le asigna el valor de x a atributoEntero. (El método tiene una variable this que apunta al objeto, de esta forma puede acceder a sus atributos).
- Se llama a setAtributoCadena con el parámetro cadenaLocal. La variable del método setAtributoCadena s recibe el valor de cadenaLocal. Se le asigna el valor de s a atributoCadena. (El método tiene una variable this que apunta al objeto, de esta forma puede acceder a sus atributos).