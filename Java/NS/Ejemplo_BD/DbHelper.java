package demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DbHelper {

	private final String url;
	private final String user;
	private final String password;
	private final boolean dropCurrentDbSupport;

	public DbHelper(String url, String user, String password, boolean dropCurrentDbSupport) {
		this.url = url;
		this.user = user;
		this.password = password;
		this.dropCurrentDbSupport = dropCurrentDbSupport;
	}

	public void dropDbSupport() throws Exception {
		try (Connection con = DriverManager.getConnection(url, user, password)) {
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("DROP TABLE IF EXISTS entity");
			}
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("DROP TABLE IF EXISTS attribute");
			}
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("DROP TABLE IF EXISTS particle");
			}
		}
	}

	public void writeEntities(List<Entity> entities) throws Exception {
		var count = 0;
		try (Connection con = DriverManager.getConnection(url, user, password)) {
			for (var entity : entities) {
				try (var st = con.prepareStatement("INSERT INTO entity (id, name) VALUES (?, ?)")) {
					st.setObject(1, entity.id);
					st.setObject(2, entity.name);
					st.execute();
				}
				for (var attribute : entity.attributes) {
					try (var st = con.prepareStatement(
							"INSERT INTO attribute (entity_id, id, name, type) VALUES (?, ?, ?, ?)")) {
						st.setObject(1, entity.id);
						st.setObject(2, attribute.id);
						st.setObject(3, attribute.name);
						st.setObject(4, attribute._type.getId());
						st.execute();
					}
					for (var particle : attribute.particles) {
						try (var st = con.prepareStatement(
								"INSERT INTO particle (entity_id, attribute_id, id, type) VALUES (?, ?, ?, ?)")) {
							st.setObject(1, entity.id);
							st.setObject(2, attribute.id);
							st.setObject(3, particle.id);
							st.setObject(4, particle._type.getId());
							st.execute();
						}
					}
				}
				if (count % 1000 == 0) {
					System.out.println("writing(postgres): " + count);
				}
				count += 1;
			}
		}
		System.out.println(count + " entities saved");
	}

	@SuppressWarnings("preview")
	public void ensureDbSupport(boolean dropCurrentDbSupport) throws Exception {
		System.out.println("Ensuring db support, drop_current_db_support: " + dropCurrentDbSupport);
		try (Connection con = DriverManager.getConnection(url, user, password)) {

			// Entity
			if (dropCurrentDbSupport) {

				try (Statement st = con.createStatement()) {
					st.executeLargeUpdate("DROP TABLE IF EXISTS entity");
				}
			}

			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("""
						CREATE TABLE IF NOT EXISTS entity (
						id		bigint,
						name	varchar(100),
						PRIMARY KEY (id)
						)
						""");
			}
			// Attribute
			if (dropCurrentDbSupport) {
				try (Statement st = con.createStatement()) {
					st.executeLargeUpdate("DROP TABLE IF EXISTS attribute");
				}
			}
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("""
						CREATE TABLE IF NOT EXISTS attribute (
						entity_id   bigint,
						id		    bigint,
						name	    varchar(100),
						type        int,
						PRIMARY KEY (entity_id, id)
						)
						""");
			}
			// Particle
			if (dropCurrentDbSupport) {
				try (Statement st = con.createStatement()) {
					st.executeLargeUpdate("DROP TABLE IF EXISTS particle");
				}
			}
			try (Statement st = con.createStatement()) {
				st.executeLargeUpdate("""
						CREATE TABLE IF NOT EXISTS particle (
						entity_id       bigint,
						attribute_id    bigint,
						id		        bigint,
						type            int,
						PRIMARY KEY (entity_id, attribute_id, id)
						)
						""");
			}
		}
	}

	public Map<Integer, Entity> readEntities() throws Exception {
		Map<Integer, Entity> entities = new HashMap<>();
		var count = 0;
		try (Connection con = DriverManager.getConnection(url, user, password)) {
			var rs = con.createStatement().executeQuery(
					"""
							SELECT
							entity.id as entity_id, entity.name as entity_name,
							attribute.entity_id as attribute_entity_id, attribute.id as attribute_id, attribute.name as attribute_name, attribute.type as attribute_type,
							particle.entity_id as particle_entity_id, particle.attribute_id as particle_attribute_id, particle.id as particle_id, particle.type as particle_type
							FROM entity
							LEFT OUTER JOIN attribute ON entity.id = attribute.entity_id
							LEFT OUTER JOIN particle ON attribute.entity_id = particle.entity_id AND attribute.id = particle.attribute_id
							ORDER BY entity.id, attribute.id, particle.id
							""");
			while (rs.next()) {
				var entityId = rs.getInt("entity_id");
				var entityName = rs.getString("entity_name");
				if (entities.size() == 0 || entities.get(entities.size() - 1).id != entityId) {
					entities.put(entityId, new Entity(entityId, entityName));
				}
				var entity = entities.get(entities.size() - 1);
				var attributeEntityId = rs.getInt("attribute_entity_id");
				var attributeId = rs.getInt("attribute_id");
				var attributeName = rs.getString("attribute_name");
				var attributeType = AttributeType.fromId(rs.getInt("attribute_type"));
				if (entity.attributes.size() == 0
						|| entity.attributes.get(entity.attributes.size() - 1).id != attributeId) {
					entity.attributes.add(new Attribute(attributeEntityId, attributeId, attributeName, attributeType));
				}
				var attribute = entity.attributes.get(entity.attributes.size() - 1);
				var particleEntityId = rs.getInt("particle_entity_id");
				var particleAttributeId = rs.getInt("particle_attribute_id");
				var particleId = rs.getInt("particle_id");
				var particleType = ParticleType.fromId(rs.getInt("particle_type"));
				if (attribute.particles.size() == 0
						|| attribute.particles.get(attribute.particles.size() - 1).id != particleId) {
					attribute.particles
							.add(new Particle(particleEntityId, particleAttributeId, particleId, particleType));
				}
				if (count % 1000 == 0) {
					System.out.println("reading(postgres): " + count);
				}
				count += 1;
			}
		}
		System.out.println(entities.size() + " entities readed");
		return entities;
	}
}
