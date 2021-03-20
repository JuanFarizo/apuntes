package demo;

import java.util.Map;

public class Program {

	static String url = "jdbc:postgresql://localhost:5432/demo";
	static String user = "postgres";
	static String password = "postgres";
	static boolean dropCurrentDbSupport = true;

	public static void main(String[] args) {

		try {
			var samplesCount = 10;
			var languagesCount = 2;
			//ME VA A CREAR LAS ENTIDADES -> es una List, es una lista del tipo Entity
			var sampleEntities = TestHelper.createSampleEntities(samplesCount, languagesCount);

			//LA CLASE ACA LO QUE VA A HACER ES DEJARLE A LA CLASE DBHELPER EL MANEJO DE LA BD
			//LA CLASE VA A CREAR Y POBLAR LAS TABLAS PROGRAMATICAMENTE.
			var helper = new DbHelper(url, user, password, dropCurrentDbSupport);

			//ME VA A BORRAR LAS TABLES SI EXISTEN
			helper.ensureDbSupport(dropCurrentDbSupport);
			helper.writeEntities(sampleEntities);

			//CREA UN MAP PARA LEER LAS ENTIDADES Y MOSTRAR
			Map<Integer, Entity> entities = helper.readEntities();
			var begin = System.currentTimeMillis();
			for (var idAndEntity : entities.entrySet()) {
				var entityId = idAndEntity.getKey();
				var entity = idAndEntity.getValue();
				System.out.println(entity);
			}
			
			var entity0 = entities.get(0);
			System.out.println(entity0);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
