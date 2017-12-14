package eu.slipo.registry.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import com.vividsolutions.jts.geom.Geometry;

public class NewPoisRequest {

	@NotEmpty
	private String tmpId;
	private String source;
	private String sourceId;
	@NotEmpty
	private ArrayList<String> names;
	private String category;
	@NotEmpty @NotNull
	private Geometry geometry; 
	
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

	public ArrayList<String> getNames() {
		return names;
	}

	public void setNames(ArrayList<String> names) {
		this.names = Objects.requireNonNull(names);
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Geometry getGeometry() {
		return geometry;
	}

	public void setGeometry(Geometry geometry) {
		this.geometry = geometry;
	}

	@Override
	public String toString() {
		return "NewPoisRequest [tmpId=" + tmpId + ", source=" + source + ", sourceId=" + sourceId + ", names=" + names
				+ ", category=" + category + ", geometry=" + geometry + "]";
	}
	
	
	
}
