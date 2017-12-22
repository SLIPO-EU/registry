package eu.slipo.registry.model;

import java.util.List;

import org.hibernate.validator.constraints.NotEmpty;

import com.vividsolutions.jts.geom.Point;

public class RadiusRequest {

	
	@NotEmpty
	private Point point;
	@NotEmpty
	private Float radius;
	private String categories;
	
	public RadiusRequest() {}

	public RadiusRequest(Point point, Float radius, String categories) {
		super();
		this.point = point;
		this.radius = radius;
		this.categories = categories;
	}

	public Point getPoint() {
		return point;
	}

	public void setPoint(Point point) {
		this.point = point;
	}

	public Float getRadius() {
		return radius;
	}

	public void setRadius(Float radius) {
		this.radius = radius;
	}

	public String getCategories() {
		return categories;
	}
	
	
	public void setCategories(String categories) {
		this.categories = categories;
	}

	@Override
	public String toString() {
		return "RadiusRequest [point=" + point + ", radius=" + radius + ", categories=" + categories + "]";
	}
	
	
}
