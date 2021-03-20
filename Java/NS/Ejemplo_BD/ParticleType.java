package demo;

public enum ParticleType {
	Integer(0), Decimal(1), Text(2), None(3);

	private final int _id;

	ParticleType(int id) {
		_id = id;
	}

	public static ParticleType fromId(int id) {
		for (var value : values()) {
			if (value._id == id) {
				return value;
			}
		}
		throw new UnsupportedOperationException();
	}

	public int getId() {
		return _id;
	}
}
