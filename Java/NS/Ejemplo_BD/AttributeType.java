package demo;

public enum AttributeType {
	DateTime(0), Integer(1), Decimal(2), Text(3), InternationalText(4), None(5);

	private final int _id;

	AttributeType(int id) {
		_id = id;
	}

	public static AttributeType fromId(int id) {
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
