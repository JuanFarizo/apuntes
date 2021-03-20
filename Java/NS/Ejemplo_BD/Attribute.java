package demo;

import java.util.ArrayList;
import java.util.List;

public class Attribute {
    public int entityId;
    public int id;
    public String name;
    public AttributeType _type;
    public List<Particle> particles = new ArrayList<>();

    public Attribute() {
    }

    public Attribute(int entityId, int id, String name, AttributeType _type) {
        this.entityId = entityId;
        this.id = id;
        this.name = name;
        this._type = _type;
    }

    @Override
    public String toString() {
        return "Attribute{" +
                "entityId=" + entityId +
                ", id=" + id +
                ", name='" + name + '\'' +
                ", _type=" + _type +
                ", particles=" + particles +
                '}';
    }
}
