-- GROUP BY & HAVING --

GROUP BY: devuelve las tablas agrupadas por algun campo
En general vienen acompañada de sentencias de agregacion

SELECT genres.name, COUNT (*) (Se puede poner SOLO DOS campos de resultado)
FROM movies
INNER JOIN genres ON genre_id = genres.id
GROUP BY genres.name 


_________________________________________________________

HAVING: Sirve para hacer filtros en los datos ya agrupados. Ej mostrar los genero que tengan mas de 3 peliculas en dicho genero.
 
SELECT genres.name, COUNT(*), AVG(length
FROM movies
INNER JOIN genres ON genre_id = genres.id
GROUP BY genres.name
HAVING COUNT(*) >= 3;
