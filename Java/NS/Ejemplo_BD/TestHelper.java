package demo;

import java.util.ArrayList;
import java.util.List;

public class TestHelper {
	public static List<Entity> createSampleEntities(int samplesCount, int languagesCount) throws Exception {
		var entities = new ArrayList<Entity>();
		for (int entityId = 0; entityId < samplesCount; entityId++) {
			var entity = new Entity();
			entity.id = entityId;
			entity.name = "Entity_" + entityId;
			for (int attributeId = 0; attributeId < 10; attributeId++) {
				var attribute = new Attribute();
				attribute.entityId = entityId;
				attribute.id = attributeId;
				attribute.name = "Attribute_" + attributeId;
				attribute._type = AttributeType.values()[attributeId % 5];
				switch (attribute._type) {
				case DateTime:
				case Integer: {
					attribute.particles.add(new Particle(entityId, attributeId, 0, ParticleType.Integer));
					break;
				}
				case Decimal: {
					attribute.particles.add(new Particle(entityId, attributeId, 0, ParticleType.Decimal));
					break;
				}
				case Text: {
					attribute.particles.add(new Particle(entityId, attributeId, 0, ParticleType.Text));
					break;
				}
				case InternationalText: {
					for (int languageId = 0; languageId < languagesCount; languageId++) {
						attribute.particles.add(new Particle(entityId, attributeId, languageId, ParticleType.Text));
					}
					break;
				}
				case None: {
					throw new Exception("Invalid AttributeType::None");
				}
				}
				entity.attributes.add(attribute);
			}
			entities.add(entity);
		}
		System.out.println("created " + samplesCount + " sample entities");
		return entities;
	}
}
