package demo;

public class Particle {
	public int entityId;
	public int attributeId;
	public int id;
	public ParticleType _type;

	public Particle() {
	}

	public Particle(int entityId, int attributeId, int id, ParticleType _type) {
		this.entityId = entityId;
		this.attributeId = attributeId;
		this.id = id;
		this._type = _type;
	}

	@Override
	public String toString() {
		return "Particle{" + "entityId=" + entityId + ", attributeId=" + attributeId + ", id=" + id + ", _type=" + _type
				+ '}';
	}
}
