ORDER BY

SELECT * FROM actors
WHERE rating > 2
ORDER BY first_name ASC;  (Si no se aclara la forma ASC igual es ascendente solo que se pone para mayor claridad) o DESC descendente.

Se puede aplicar mas de un filtro 

ORDER BY first_name ASC, last_name ASC En caso de haber dos nombres iguales ordena seguidamente por apellido

Se pueden combinar
ORDER BY first_name DESC, last_name ASC;

__________________________________________________

SELECT
FROM
WHERE
ORDER BY
LIMIT 5;  Limit permite acotar la cantidad de resultados de la consulta

Limit puede ir acompañado de la palabra OFFSET 5, asi saltea los primeros 5 resultados.

SELECTFROM
WHERE
ORDER BY
LIMIT x
OFFSET x;



