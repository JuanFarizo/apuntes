Include : Nos permite incluir otro archivo.
Sirve para: - Reutilizar el código.
			- Organizar el código
Include ("head.php");
Include_once ("algo.php");
Require ("algo.php");
Require_once ("algo.php");


Podemos definir funciones en un archivo php aparte e incluirlas mediante estas funciones. 
 

La diferencia entre include y require es que 
include: dispara un warning en caso de error.
require: dispara un fatal error en caso de error.