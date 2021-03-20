package demo;

import java.util.ArrayList;
import java.util.List;

public class Entity {
	public int id;
	public String name;
	public List<Attribute> attributes = new ArrayList<>();

	public Entity() {
	}

	public Entity(int id, String name) {
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Entity{" + "id=" + id + ", name='" + name + '\'' + ", attributes=" + attributes + '}';
	}
}
