Joins & Distinct 

A PARTIR DE UNA RELACION DE UNO A MUCHOS : 

SELECT *
FROM movies, genres
WHERE genre_id = genres.id

SELECT *
FROM movies
INNER JOIN genres ON genre_id = genres.id

LEFT JOIN: La primer tabla nombrada acepta resultados nulos.
RIGHT JOIN: Se aceptan generos que no tienen peliculas asociadas.


A PARTIR DE UNA RELACION DE MUCHOS A MUCHOS: Se deben hacer dos INNER JOIN uno para juntar con la tabla intermedia y otro para juntarla con la tabla de actores.

SELECT *
FROM movies
INNER JOIN actor_movie ON movie_id = movies.id 
INNER JOIN acotrs ON actor_id = actors.id


LEFT: Trae la tabla A entera y lo que se comparte con la B
INNER: Unicamente trae lo que comparten la tabla A y B
RIGHT: Trae la tabla B entera y lo que se comparte con la A
FULL: Trae ambas tablas  enteras

Ej.:
SELECT *
FROM movies AS t1
INNER JOIN genres AS t2 ON t1.genre_id = t2.id;
_________________________________________________________________________________________________________

DISTINCT: permite eliminar columnas que sean exactamentes iguales

SELECT DISTINCT first_name, last_name
FROM movies
INNER JOIN actor_movie ON movie_id = movies.id
INNER JOIN actors ON actor_id = actors.id
WHERE title LIKE "Harry%";
