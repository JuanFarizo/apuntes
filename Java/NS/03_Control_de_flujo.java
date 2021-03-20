---------------------CONTROLAR EL FLUJO DEL PROGRAMA --------------------
Operadores:
	Un operador recibe uno o más argumentos y produce un nuevo valor. Los argumentos tienen un formato diferente que las habituales llamadas a métodos, pero el efecto es el mismo.
	Suma (+), resta y signo negativo (-), multiplicación (*), división (/) y asignación (=)

	Todos los operadores producen un valor de sus operandos. Adicionalmente un operador puede cambiar el valor de un operado. Esto se conoce como efecto lateral. El uso más común de los operadores que modifican sus operandos es generar el efecto lateral, pero debemos recordar que el valor generado estará disponible para su uso de la misma forma que en el caso de los operadores sin efecto lateral. 
La mayoría de operadores trabajan solamente con tipos primitivos. Las excepciones son ' = ', ' == ' y ' != ', que trabajan con todos los tipos de objetos

Asignación:
La asignación se representa con el operador =
Significa "tomar el valor de la parte derecha (a menudo llamado rvalue) y copiarlo en la parte izquierda (a menudo llamado lvalue)". Un rvalue es cualquier constante, variable o expresión que produce un valor, pero el lvalue debe ser una variable.


Siempre que manipulamos un objeto lo que estamos manipulando es la referencia al objeto, por lo que cuando asignamos "de un objeto a otro" lo que estamos haciendo es copiar una referencia de un sitio a otro. Esto significa que si decimos C = D siendo ambos objetos, acabamos teniendo a C y D referenciando al objeto que originalmente solo referenciaba D. 

Frecuentemente se denomina a este fenómeno alias.

Pero y si en este caso no queremos que aparezcan alias?. Podemos adelantarnos a la asignación y decir: 

	n1.i = n2.i;

Esto conserva los dos objetos por separado.
Alias en las llamadas a métodos:
Los alias también pueden aparecer cuando pasamos un objeto en un método 


Operadores matemáticos 
	Los operadores matemáticos básicos son los mismos que están disponibles en la mayoría de lenguajes de programación: suma (+), resta (-), división (/), multiplicación (*) y modulo (%, produce el resto de una división de enteros)

	• Recordar que los literales enteros son de tipo int y los que tienen decimales son double, a menos que se coloque el sufijo f.
	• Estudiar cómo funciona el operador módulo ( % ) con números negativos
	• Estudiar la clase java.lang.Math, que brinda varias operaciones matemáticas sobre datos de tipo double.
	• Recordar que la división de punto flotante por cero no genera un error, ya que existen valores especiales (POSITIVE_INFINITY, NEGATIVE_INFINITY y NaN) definidos en las clases Float y Double. En el caso de los enteros, produce una excepción.

Auto incremento y decremento :
	El pre-incremento significa que el operador ++ aparece antes de la variable o expresión, y el post-incremento significa que el operador ++ aparece después de la variable o expresión. De forma similar, el pre-decremento significa que el operador -- aparece antes de la variable o expresión, y el post-decremento significa que el operador -- aparece después de la variable o expresión.

Operadores relacionales:
Los operadores relacionales generan un resultado boolean. Estos son:
	menor que (<)
	menor o igual que (<=)
	mayor que (>)
	mayor o igual que (>=),
	igualdad (==)   compara referencias a objetos
	desigualdad (!=)  compara referencias a objetos
La igualdad y la desigualdad funcionan con todos los tipos de datos predefinidos, pero las otras comparaciones no funcionarán con el tipo boolean. 

Comprobar la equivalencia de un objeto:
Los operadores relacionales == y != también funcionan con todos los objeto.
Mientras el contenido de los objetos pueden ser el mismo, las referencias no lo son y los operadores == y != comparan referencias a objetos.


Por defecto de equals() es comparar las referencias. Si creamos una nueva clase y deseamos que compare el contenido y no la referencia, lo que debemos hacer es sobreescribir el método.

El operador == funciona con literales de String por el hecho de que el compilador hace una optimización y pone los literales de String iguales en la misma posición de memoria


--------------------OPERADORES LOGICOS Y A NIVEL DE BIT -------------------
AND (&), OR (|) y NOT (!) producen el valor lógico true o false 

Podemos aplicar AND, OR, o NOT a valores lógicos y a tipos integrales. En el primer caso operan sobre los valores booleanos, en el segundo caso se aplican a nivel de bit, donde un 1 equivale a verdadero y un cero a falso.

A nivel de bit se agregan dos operadores. El ^ representa el XOR (O exclusivo) y el ~ es la negación.
Recordar que al aplicar operadores a nivel de bit los datos se promueven a int.

Comportamiento Cortocicuitados
En versiones de AND (&&) y OR (||) : significa que la expresión se evaluará solamente hasta que la falsedad o veracidad de la misma se pueda determinar de forma no ambigua. 
Como resultado de esto, pueden no evaluarse todas las partes de una expresión lógica. 

Expresion1 && Expresion2
no evalúa Expresion2 si Expresion1 devolvió falso. De manera similar,
Expresion1 || Expresion2
no evalúa Expresion2 si Expresion1 devolvió verdadero. 



------------------------OPERADORES DE CORRIMIENTO -----------------------
Manipulan bits, solo se usan con  tipos integrales primitivos.
- corrimiento a la izquierda << 
- corrimiento a la derecha >>: El corrimiento a la derecha inserta 1 si el número es negativo y 0 si es positivo. También existe el corrimiento a la derecha sin signo >>>
Se pueden combinar con el signo igual para obtener <<=, >>= o >>>=.

Recordar que los tipos char, byte y short son promovidos a int.
Tener en cuenta que no se hacen corrimientos mayores a lo permitido por int y long. En el caso de int, al segundo operador se le aplica el módulo 32 y en el long, se aplica módulo 64.

------------------------OPERADOR TERNARIO -----------------------
expresion-booelana ? valor0 : valor1

------------------------OPERADOR COMA -----------------------
El operador coma se usa en Java para los bucles. 

------------------------OPERADOR + PARA STRING -----------------------
Para concatenar Strings. Si al menos uno de los elementos en la expresión es un String, Java intentará convertir los otros en String.
Este, junto con el += para String, son los únicos casos de sobrecarga de operadores en Java.
Recordar que si al menos uno de los elementos involucrados en la operación + es String, se realizará una concatenación y no una suma.

------------------------OPERADORES DE MOLDE -----------------------
Permiten cambiar un tipo de molde a otro

Para aplicar un molde se debe colocar el tipo (entre paréntesis) al que se desea llevar la expresión, antes de la misma:

int i = 200;
long l = (long)i;

Java permite el molde entre cualquier tipo primitivo (excepto boolean) y entre clases de la misma familia.
Si por algún motivo debemos perder precisión en el tipo, Java nos obligará a realizar un molde. 

El siguiente gráfico muestra las conversiones que no necesitan molde:

byte->short->int->long->float->double

char->int->long->float->double

------------------------PRESEDENCIA-----------------------
Tipo de operador: 				Operadores:
Unarios							+ - ++ --
Aritméticos y de corrimiento	* / % + - << >>
Relacionales					< > >= <= == !=
Lógicos y a nivel de bit		&& || & | ^
Condicionales					A > B ? X : Y
Asignación						= (y la asignación compuesta)


------------------------CONTROL DE EJECUCION-----------------------
break para terminar con la ejecución del mismo y continue para ir al inicio de la próxima iteración.

- if y if-else
	if (expresión-booleana)
	   sentencia

	if (expresión-booleana)
	   sentencia
	else
	   sentencia

- while y do-while: Ejecuta sentencia mientras expresión-booleana sea verdadera.
	while (expresión-booleana)
   		sentencia

	do
   		sentencia
	while (expresión-booleana);

- for
	for (inicialización; expresión-booleana; paso)
   		sentencia
Se pueden colocar varias sentencias en la inicialización y en el paso, separándolas por el operador coma.
Se pueden declarar variables en la inicialización, pero siempre del mismo tipo (ya que por el hecho de que se separan por comas se produciría una ambigüedad).

- switch
	switch(selector-integral) {
	case valor-integral1 : sentencia; break;
	case valor-integral2 : sentencia; break;
	case valor-integral3 : sentencia; break;
	case valor-integral4 : sentencia; break;
	case valor-integral5 : sentencia; break;
	// ...
	default: sentencia;
	}

El break al final de cada sentencia es opcional, pero de no colocarse, Java continuará con la ejecución del switch una vez terminada la ejecución de la sentencia actual
