BETWEEN & LIKE 

SELECT * 
FROM movies
WHERE awards BETWEEN 2 AND 6; 
BETWEEN funciona con numeros, textos y fechas se usa como filtro del WHERE e incluye los extremos.

_______________________________________

LIKE: Permite hacer busquedas en campos de texto o fechas

SELECT * 
FROM movies
WHERE title LIKE "Toy Story" 

Se pueden agregar operadores (wildcards o comodines)

%: representa cero, uno o varios caracteres
_: representa un solo caracter

 
LIKE "Toy%"; no importa como sigue, la consulta trae todo lo que comienza con Toy

De forma similar si se pone al comienzo no importa como comience la consulta trae todo lo que finalice con galaxias
LIKE "%galaxias";

LIKE "%guerra%"; la consulta trae todo lo que tenga la palabra guerra

LIKE "a%a%"; debe comenzar con la letra a y debe tener una a en el texto

LIKE "_a%" los nombres que tengan la letra 'a' como segundo caracter

