package dbtest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbManager {
	static String url = "";
	static String user = "";
	static String password = "";
	static boolean dropCurrentDbSupport = true;

	 public static void main(String[] args) throws SQLException {
	 	//Corro una conexión a BD, lo metemos en un try ya que al ser un autoclosable luego de ejecutarse se cierra solo.
	 	
		try(Connection con = DriverManager.getConnection(url, user, password)){
			System.out.println("Extio!");
		}	
		/*Creación Statement:
		* 1) Abro una conexión mediante el DriverManager	
		*/
		try (Connection con = DriverManager.getConnection(url, user, password)) {
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("DROP TABLE IF EXISTS entity");
			}


	}

}