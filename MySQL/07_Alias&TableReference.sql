ALIAS & TABLE REFERENCE

Los Alias no modifican las tablas ni estructura ni datos.

SELECT title AS "titulo pelicula"
FROM movies

Se puede aplicar a TABLAS , COLUMNAS , FUNCIONES.

SELECT  CONCAT(title, '(',year(release_date),')') AS mi_pelicula
FROM movies;

El operador || permite concatenar texto
ej.
SELECT "Hola" || " " || "Mundo" as saludo from clientes;
va a traer el texto "Hola Mundo" 

SELECT nombre || " " || apellido AS "nombre completo" FROM clientes;
trae los nombre y apellidos separados por un espacio en un columna unica que se llama nombre completo.

_________________________________________________

CONSULTAS QUE INVOLUCRAN RELACIONES ENTRE LAS TABLAS

SELECT title, genre_id, genre.id (el operador punto se usa nombreDeLaTabla.campo)
FROM nombreDeLaPrimerTabla, nombreDeLaSegundaTabla....
WHERE genre_id = genre.id;


SELECT *
FROM movies, actor_movie, actors
WHERE actor_movie.actor_id = actor.id
AND actor_movie.movie_id = movie.id

SELECT campos
FROM tablaA AS t1, tablaB AS t2
WHERE t1.campo = t2.campo