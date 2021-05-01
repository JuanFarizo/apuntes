El muliple tareas lo podemos alcanzar por dos formas diferentes:
	Por Multiprocessing
	Por Multithreading

Multithreading : Usan areas de memoria compartidas.
Ventajas:
	- No bloquean al usuario
	- Se pueden performar varias acciones en simultaneo
	- Lo threads son independientes, no afectan otros threads si una excepción ocurren en otro.

Que es un thread en java:
	Es un subprocesso, una unidad de almacenamiento pequeña, con un path de ejecución diferente.

Ciclo de vida de un thread: Puede estar en 1 de 5 estados:
	1. new: cuando se crea una clase de Thread, antes de la invocación del start()
	2. runnable: luego de la invocación del start(), pero el scheduler todavia no lo ha seleccionado para estar corriendo. Una vez que el shceduler lo selecciona estara corriendo.
	3. non-runnable (Blocked): cuando el thread todavia esta vivo pero no es legible para seguir corriendo. Esperando por algun recurso o que ocurra un evento.
	4. terminated : caundo el metodo run() sale o termina.
	5. no running

Hay dos maneras de crear threads:
	1. Extendiendo de la clase Thread: Provee el constructor y los métodos para crear y realizar operaciones sobre los thread. (Implementa Runnable interface). La subclase sobreescribe el método run() de la clase Thread. Invocando el método start() del objeto instanciado inicia la ejecución del thread. 
		– Derivar de la clase Thread
		– Override el método run()
		– Crear un thread con new MyThread(...)
		– Iniciar el thread invocando el método start()
		Esquemas de inicio de un thread desde una subclase:
		1. El método start() no está en el constructor de la subclase: start() requiere ser invocado explícitamente después de crear la instancia
		2. El método start() está en el constructor de la subclase: La creación de la instancia del objeto iniciará el thread.

	2. Implementando una interface Runnable: deberia ser implementada por cualquier clase cuyas instancias estan intencionadas a ser ejecutadas por un thread. Solo tienen un metodo llamado run() sin argumentos. Se utiliza para realizar acciones para un thread. Una clase que implementa Runnable puede ejecutarse sin derivar de Thread instanciando un Thread y pasándolo como parámetro
		– Implementar la interface Runnable
		– Override el método run()
		– Crear un thread con new Thread(runnable)
		– Iniciar el thread invocando el método start()
		Esquemas de inicio de un thread para una clase que implementa Runnable:
		1. El thread invocante crea un objeto Thread y lo inicia explícitamente después de crear un objeto de la clase que implementa la interface Runnable. El método start() del objeto Thread require ser invocado explícitamente
		2. El objeto Thread se crea y se inicia dentro del método constructor de la clase que implementa la interface Runnable: El thread invocante sólo necesita crear instancias de la clase Runnable

Una vez que un thread se ha iniciado no podemos volver a iniciarlo, de lo contrario causará una excepción IllegalThreadStateException.

Cada thread se inicia en una Pila.
Invocar el métodos run() desde un main thread, el método run() pasa a la Pila actual, y no al principio de una nueva.

join():
	Este metodo espera a un thread a que muera. Hace que los suprocesos en ejecución dejen de ejecutarse hasta que el subrpoceso con el que se une cumpla su tarea.

Se puede nombrar los threads y acceder a sus nombres:
setName()
getName()
 

Prioridades: representada por un número del 1 al 10. Determinan que un thread reciba el control de la CPU y se ejecute antes.
Hay 3 constantes de definición en la clase Thread:
	public static int MIN_PRIORITY valor de 1
	public static int NORM_PRIORITY es la default, tiene un valor de 5
	public static int MAX_PRIORITY tiene un valor de 10

Daemon Thread: service provider thread que provee servicios al thread de usuarios. Su vida esta a merced del user thread, cuando este muere termina este thread automaticamente.
DT: Provee un servicio a los threads de usuario para tareas de suporte en background.
Su vida depende de los threads de usuario.
Es un thread de baja prioridad.
Para setear un Thread como daemon debemos hacerlo antes que este arranque (start())

Java Thread Pool: grupo de worker threads que estan esperando por un trabajo y se reutilizan muchas veces. Una vez que se le asigna un trabajo sale del pool, y luego de completar el trabajo vuelve al pool de threads nuevamente.

ThreadGroup in Java: Forma de agrupar multiples threads en un objeto unico. Podemos suspender, resumir o interrumpir grupos de threads con una sola llamada a un método.

ThreadGropu representa un set de threads. Pueden incluir otros grupos de threads. Crea un árbol en el que cada grupo de thread, excepto el grupo de thread inicial, tiene un padre. Un thread tiene permitido acceder a información acerca de su propio grupo.

¿CÓMO REALIZAR UNA ÚNICA TAREA POR MULTIPLES THREADS?
Debemos tener un único método run().









