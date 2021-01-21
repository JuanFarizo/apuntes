-- Funciones de Agregacion --
No operan por cada uno de las filas, sino que obtienen un dato de conclsion. Excepto COUNT las funciones ignoraran los valores NULL

COUNT: De todos los campos cuantas filas hay en una tabla

SELECT COUNT  (*)
FROM movies
________________________________________________
MAX: devuelve el valor maximo de un campos

SELECT MAX (length)
FROM movies	
________________________________________________
MIN: devuelve el valor minimo de un campos

SELECT MIN (length)
FROM movies
________________________________________________
AVG: devuelve un promedio

SELECT AVG (length)
FROM movies
________________________________________________
SUM: devuelve la suma de un campos

SELECT SUM (length)
FROM movies
