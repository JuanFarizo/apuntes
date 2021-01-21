SELECT camposQueNosInteresan (si queremos elegir todas las columnas usamos el *)
FROM nombreDeLaTabla
 
En el select se pueden realizar operaciones como matemáticas
Por ejemplo
SELECT title, rating * 10
FROM movies;

SELECT precio/puntuacion FROM productos;

_____________________________________________________

SELECT * 
FROM movies
WHERE awards > 3

Las fechas las tratamos como string
WHERE lanzamiento > "2001-01-01"
AND awards > 3
OR awards != 5

Puedo realizar operaciones matemáticas dentro del OR o del WHERE

OPERADORES

=
<=
>=
!= <>
IS NULL (es nulo)
BETWEEN (entre dos valores)
IN (lista de valores)
LIKE (se ajusta a)

El WHERE  siempre que necesitemos se utiliza de filtro. Se puede usar conjuntamente con SELECT, UPDATE, DELETE, etc.
