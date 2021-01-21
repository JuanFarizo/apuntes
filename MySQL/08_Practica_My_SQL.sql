EJERCITACION 
DigitalHouse.png
Práctica 1 (ejercitación simple)


En relación a la base de datos proporcionada, realizar estos ejercicios. Utilizaremos estos temas ya vistos: SELECT | WHERE | ORDER BY / ASC/DESC | LIMIT / OFFSET | BETWEEN / LIKE | Alias |

Obtener todas las películas (movies) que se realizaron luego del año 2000 (usar release_date).
Obtener todas las películas (movies) hechas entre el año 2000 y el año 2010 (release_date).
Obtener todos los actores (actors) que no se llamen “Mark”.
Obtener todos los actores (actors) que se llamen “Mark” o “Sam”.
Obtener todas las películas (movies) que hayan sido hechas previo al año 2000 o posterior al año 2009 y además tengan id mayor a 10 (usar release_date e id).
Obtener todos los actores (actors) ordenados alfabéticamente por nombre y en segundo lugar por su apellido (usar fisrt_name y last_name).
Obtener todas las películas (movies) ordenadas por la fecha de estreno, desde la más antigua a la más reciente. (usar release_date).
Obtener aquellas películas (movies) hechas en el siglo XXI ordenadas por título (usar release_date y title).
Obtener únicamente 3 películas (movies), a partir de la película 7 hechas en el siglo XXI (usar release_date).
Obtener las películas (movies) hechas entre Octubre 1999 y Diciembre 2004, que muestre las películas más nuevas de primero (usar release_date).
Obtener los actores (actors) que el nombre empiece con “HE”’ hasta los que empiezan con “TO”, ordenarlo como desee (usar first_name).
Obtener las películas (movies) que empiezan con la letra “T”, ordenarlo como desee (usar title).
Obtener las películas (movies) hechas en el mes de Octubre o en el año 1999, ordenar que el año sea el primer ordenamiento y el título de mayor a menor (usar release_date y title).
Obtener los actores (actors) que contengan en el apellido ‘“DE” ó ‘ll’ y en el nombre “A”. Ordenarlo como desee (usar first_name y last_name).
Obtener las películas (movies) que sean de la saga de “Toy Story” y las películas de la saga de “Harry Potter” con duración de 2 horas. Ordenarlas por nombre ascendente y luego por duración en descendente (usar title y length).
Obtener todas las películas (movies) que tengan de rating “8.3”, “9.1” y “9.0”. Ordenarlas como desee (usar rating).
Obtener las películas (movies) que no tengan duración de 2 y 2 horas y media. Mostrar en orden ascendente los títulos (usar length y title).
Obtener los campos “id” como “id_genero”, “name” como “nombre_genero”  de la tabla generos (genres). Ordenarlo por nombre_genero de menor a mayor.
Práctica 2 (Ejercicio Integrador 1)


En relación a la base de datos proporcionada, necesitamos realizar tres informes. Realizá las consultas adecuadas para obtener los datos necesarios. Utilizaremos SELECT … FROM … WHERE

Obtener las películas (movies) y sus géneros (genres), ordenado por nombre de pelicula (usar title).
Obtener las películas (movies) con sus actores (actors), ordenar por nombre de pelicula y nombre de los actores (usar title y first_name).



# SELECT * FROM movies where realase_date "2001-01-01";

# SELECT * FROM movies where release_date BETWEEN "2000-01-01" AND "2010-01-01";

# SELECT * FROM actors WHERE first_name != "Mark"; 

# SELECT * FROM actors WHERE first_name = "Mark" OR first_name = "Sam";

# SELECT * FROM movies WHERE id > 10 AND (release_date < "2000-01-01" or release_date > "2009-01-01"); 

# SELECT * FROM actors ORDER BY first_name ASC , last_name ASC;

# SELECT * FROM movies ORDER BY release_date ASC;

# SELECT * FROM movies WHERE release_date > "2000-01-01" ORDER BY title;

# SELECT * FROM movies WHERE release_date > "2000-01-01" LIMIT 3 OFFSET 7;

# SELECT * FROM movies WHERE release_date BETWEEN "1999-10-01" AND "2004-12-01" ORDER BY release_date;

# SELECT * FROM actors WHERE first_name BETWEEN "HE" AND "TO" ORDER BY first_name;

# SELECT * FROM movies WHERE title LIKE "T%" ORDER BY title;

# SELECT * FROM movies WHERE MONTH(release_date) = 10 OR YEAR(release_date) = 1999 ORDER BY release_date ASC, title; 

# SELECT * FROM actors WHERE first_name LIKE "%a%" AND  (last_name LIKE "%DE%" OR last_name LIKE "%ll%" )  ORDER BY first_name;

# SELECT * FROM movies WHERE (title LIKE "Toy Story%" OR title LIKE "%Harry Potter%") AND LENGTH = 120 ORDER BY title ASC, LENGTH DESC;

# SELECT * FROM movies WHERE rating = 8.3 OR rating = 9.1 OR rating = 9.0 ORDER BY rating;

# SELECT * FROM movies WHERE LENGTH != 120 AND LENGTH != 150 ORDER BY title ASC;

# SELECT id AS id_genero, NAME AS nombre_genero  FROM genres ORDER BY nombre_genero ASC;

# SELECT title, name FROM movies, genres WHERE movies.genre_id = genres.id;

# SELECT movies.title, actors.first_name FROM movies, actors, actor_movie WHERE actors.id = actor_movie.actor_id AND movies.id = actor_movie.movie_id ORDER BY movies.title, actors.first_name;