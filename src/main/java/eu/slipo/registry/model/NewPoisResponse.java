package eu.slipo.registry.model;

public class NewPoisResponse {
	
	private String tempId;
	private Integer status;
	private String uri;
	
	public NewPoisResponse(String tempId, Integer status, String uri) {
		super();
		this.tempId = tempId;
		this.status = status;
		this.uri = uri;
	}
	
	public String getTempId() {
		return tempId;
	}
	public void setTempId(String tempId) {
		this.tempId = tempId;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}

}
