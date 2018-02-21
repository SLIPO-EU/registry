package eu.slipo.registry;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vividsolutions.jts.geom.Geometry;


@Entity
@Table(name ="pois", schema= "public")
public class POIEntity{
	
	@Id //@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
	//@GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "pois_id_seq")
	//@SequenceGenerator( sequenceName = "public.pois_id_seq", name = "pois_id_seq", allocationSize = 1)
	private UUID id;
	@Transient @JsonIgnore
	private String tempId;
	private String source;
	private String sourceId;
	private String names;
	private String categories;
	private Geometry geo;
	//TODO same a
	
	
	public POIEntity() {}
	public POIEntity(String tempId, String source, String sourceId, String names, String categories, Geometry geo) {
		super();
		this.tempId = tempId;
		this.source = source;
		this.sourceId = sourceId;
		this.names = names;
		this.categories = categories;
		this.geo = geo;
	}
	public String getTempId() {
		return tempId;
	}
	public void setTempId(String tempId) {
		this.tempId = tempId;
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
		this.sourceId = sourceId;
	}
	public String getNames() {
		return names;
	}
	public void setNames(String names) {
		this.names = names;
	}
	public String getCategories() {
		return categories;
	}
	public void setCategories(String categories) {
		this.categories = categories;
	}
	public Geometry getGeo() {
		return geo;
	}
	public void setGeo(Geometry geo) {
		this.geo = geo;
	}
	public UUID getId() {
		return id;
	}
	public void setId(UUID a) {
		this.id=a;
	}
	@Override
	public String toString() {
		return "POI [id=" + id + ", source=" + source + ", sourceId=" + sourceId + ", names="
				+ names + ", categories=" + categories + ", geo=" + geo + "]";
	}
	
	
}