-- Funciones MySQL --

CONCAT: Permite unir varios textos

SELECT CONCAT (first_name, " ", last_name) as nombre_completo
FROM actors
________________________________________________
COALESCE: Reemplaza los datos nulos por un valor por defecto COALESCE (campo, valor), o tambien se usa para obtener la primer expresion NOT NULL de una lista 

SELECT title, COALESCE(length, 0)
FROM movies

SELECT id, customername, COALESCE (mobile, home, work) AS phone
FROM customers
_________________________________________________
DATEDIFF: Devuelve la diferencia de dias entre dos fechas, usamos la funcion NOW() para determinar desde la fecha actual a la fecha de release_date

SELECT DATEDIFF(NOW() , release_date)
FROM movies
_________________________________________________
EXTRACT: Permite extraer un dato en particular. Ej el mes de la fecha de estreno (SECOND, MINUTE, HOUR, DAY, MONTH, YEAR, WEEK, QUARTER)

SELECT EXTRACT (MONTH FROM release_date)
FROM movies
_________________________________________________
DATE_FORMAT: Permite cambiar el formato de fecha de MySQL al formato que mas nos convenga.

SELECT 
	title, 
	release_date, 
	DATE_FORMAT(release_date, "%W %M %Y") AS fecha_de_estreno
FROM movies
ORDER BY rating
_________________________________________________
REPLACE: Permite cambiar un texto por otro. REPLACE (string1, caracteres_a_reemplazar_del_string1, caracteres_nuevos)

SELECT REPLACE (title, "Harry", "Juanito")
FROM movies
_________________________________________________
LENGTH: Permite obtener la longitud de los string
_________________________________________________
CASE: Permite analizar distintos casos y devolver distintos resultados

SELECT 
	title,
	CASE
		WHEN rating < 5 THEN "Mala"
		WHEN rating < 7 THEN "Buena"
		WHEN rating < 9 THEN "Muy Buena"
		ELSE "Excelente"
	END AS valoracion_pelicula
FROM movies