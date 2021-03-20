Una Exception es un cierto tipo de error o una condición anormal que se ha producido durante la ejecución de un programa. Algunas excepciones son fatales y provocan que se deba finalizar la ejecución del programa. 
Los errores se representan mediante dos tipos de clases derivadas de la clase Throwable: Error y Exception.

La clase Error está relacionada con errores de compilación, del sistema o de la JVM. De ordinario estos errores son irrecuperables y no dependen del programador.



1.	RuntimeException: Son excepciones muy frecuentes, de ordinario relacionadas con errores de programación. Se pueden llamar excepciones implícitas. El propio Java durante la ejecución de un programa chequea y lanza automáticamente las excepciones.
EL PROGRAMADOR NO NECESITA ESTABLECER LOS BLOQUES TRY / CATCH PARA CONTROLAR ESTE TIPO DE EXCEPCIONES. 

2.	Las demás clases derivadas de Exception son excepciones explícitas. Java obliga a tenerlas en cuenta y chequear si se producen. 


-------------RUNTIMEEXCEPTION----------
Representan dos casos de errores de programación: 
1.	Un error que normalmente no suele ser chequeado por el programador, como por ejemplo recibir una referencia null en un método. 
2.	Un error que el programador debería haber chequeado al escribir el código, como sobrepasar el tamaño asignado de un arreglo


LANZAR UNA EXCEPCIÓN:
El proceso de lanzamiento de una excepción es el siguiente: 
	1.	Se crea un objeto Exception de la clase adecuada. 
	2.	Se lanza la excepción con la sentencia throw seguida del objeto Exception creado. 

La excepción deberá ser capturada (catch) y gestionada en el propio método o en algún otro lugar del programa.
Solamente en el caso de que el método incluya los bloques try/catch/finally se ejecutará el bloque catch que la captura o el bloque finally (si existe). 


Si un método puede lanzar varias excepciones, se ponen detrás de throws separadas por comas:
	public void leerFichero(String fich)
   throws EOFException, FileNotFoundException {…}

