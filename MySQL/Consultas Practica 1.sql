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