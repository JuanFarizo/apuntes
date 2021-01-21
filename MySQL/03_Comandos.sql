Comandos MySQL

1) CREATE TABLE nombreDeLaTabla (id INTEGER AUTO_INCREMENT PRIMARY KEY,
	nombreColumna1 tipoDeDato,
	nombreColumna2 tipoDeDato UNSIGNED,
	nombre VARCHAR(50) NOT NULL,
	fecha_nacimiento DATE,
	email VARCHAR(100) UNIQUE)
	
2) DROP TABLE nombreDeLaTabla;
   DROP TABLE IF EXIST nombreDeLaTabla;

3) ALTER TABLE nombreDeLaTabla ADD COLUMN nombreColumna tipoDeDato 
							   DROP COLUMN nombreColumna
						       MODIFY tipoDeDato;


MODIFICACION DE FILAS

1) Se pueden ir poniendo los valores segun cada una de las columnas 
	INSERT INTO nombreDeLaTabla VALUES (DEFAULT, 'Juan', 'Perez', '1989-06-06', 'juanfarizo@hotmail.com')
	 o
	Se puede poner el nombe de la columna seguida del valor
	INSERT INTO nombreDeLaTabla (nombreColumna, nombreColumna1, nombreColumna2) VALUES ('Juan', 'Perez', '1989-06-06')
	
	Si no especifico las columnas debo ingresar todos los datos correspondientes a la tabla
	Para el autoincremental se deja DEFAULT
	
2) UPDATE nombreDeLaTabla SET nombreColumna = 'Pepe' , nombreColumna1 = 'Valor';
	Es necesario especificar la condicion WHERE
Ej. UPDATE movies 
	SET rating = 9.8
	WHERE id = 15;
3) DELETE FROM nombreDeLaTabla     /* elimina toda la tabla */ 
	Es necesario especificar la condicion WHERE 