package eu.slipo.registry.model;

import java.util.Objects;

import com.vividsolutions.jts.geom.Geometry;

public class NewPoisRequest {

	private String tmpId;
	private String source;
	private String sourceId;
	private String names;
	private String category;
	private String geometry; 
	
	public NewPoisRequest() {}

	public String getTmpId() {
		return tmpId;
	}

	public void setTmpId(String tmpId) {
		this.tmpId = Objects.requireNonNull(tmpId);
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getSourceId() {
		return sourceId;
	}

	public void setSourceId(String sourceId) {
		this.sourceId = Objects.requireNonNull(sourceId);
	}

	public String getNames() {
		return names;
	}

	public void setNames(String names) {
		this.names = Objects.requireNonNull(names);
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getGeometry() {
		return geometry;
	}

	public void setGeometry(String geometry) {
		this.geometry = geometry;
	}

	@Override
	public String toString() {
		return "NewPoisRequest [tmpId=" + tmpId + ", source=" + source + ", sourceId=" + sourceId + ", names=" + names
				+ ", category=" + category + ", geometry=" + geometry + "]";
	}
	
	
	
}
