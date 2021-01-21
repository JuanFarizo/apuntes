SELECT genres.name, movies.title
FROM genres
INNER JOIN movies ON genres.id = movies.genre_id
ORDER BY genres.name; 

SELECT movies.title, genres.name, actors.first_name, actors.last_name
FROM movies
INNER JOIN actor_movie ON actor_movie.movie_id = movies.id
INNER JOIN actors ON actor_movie.actor_id = actors.id
INNER JOIN genres ON genres.id = movies.genre_id; 

 SELECT actors.first_name, movies.title
FROM actors
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id
INNER JOIN movies ON actor_movie.movie_id = movies.id
ORDER BY actors.first_name; *

SELECT movies.title, genres.name
FROM movies
LEFT JOIN genres ON movies.genre_id = genres.id
ORDER BY movies.title, genres.name;

SELECT  distinct episodes.title AS "Titulo episodio", seasons.number AS "numero de temporada" , series.title AS "titulo serie", genres.name AS "nombre genero"
FROM series
INNER JOIN seasons ON seasons.serie_id = series.id
INNER JOIN genres ON series.genre_id = genres.id
INNER JOIN episodes ON episodes.season_id = seasons.id 
INNER JOIN actor_episode ON actor_episode.episode_id = episodes.id
INNER JOIN actors ON actors.id = actor_episode.actor_id; 

SELECT genres.name AS "nombre del genero", AVG (movies.rating) AS "Promedio rating"
FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
GROUP BY genres.name
HAVING (AVG(movies.rating)>5); 

SELECT series.title
FROM series
WHERE ((EXTRACT (YEAR FROM series.release_date)) = "2016")
INNER JOIN seasons ON seasons.serie_id = series.id
INNER JOIN episodes ON episodes.season_id = seasons.id 
GROUP BY series.title;






