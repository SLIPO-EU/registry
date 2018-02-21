package eu.slipo.registry;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name ="sameas", schema= "public")
public class SameAsEntity {
	@Id@GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "pois_id_seq")
	@SequenceGenerator( sequenceName = "public.pois_id_seq", name = "pois_id_seq", allocationSize = 1)
	private int id;
	private UUID id1;
	private UUID id2;
	
	public SameAsEntity() {	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public UUID getId1() {
		return id1;
	}
	public void setId1(UUID id1) {
		this.id1 = id1;
	}
	public UUID getId2() {
		return id2;
	}
	public void setId2(UUID id2) {
		this.id2 = id2;
	}
	

}
