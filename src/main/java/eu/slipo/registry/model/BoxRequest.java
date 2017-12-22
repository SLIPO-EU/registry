package eu.slipo.registry.model;

import java.util.List;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;


public class BoxRequest {
	
	@NotEmpty(message = "Coordinate cannot be null") @Digits(fraction = 0, integer = 0)
	private float top;
	@NotEmpty(message = "Coordinate cannot be null")
	private float left;
	@NotEmpty(message = "Coordinate cannot be null")
	private float bottom;
	@NotEmpty(message = "Coordinate cannot be null")
	private float right;
	@Size(min = 4)
	@Pattern(regexp = "([a-zA-Z0-9]*)")//TODO 
	private String categories;
	
	public BoxRequest() {}

	public float getTop() {
		return top;
	}

	public void setTop(float top) {
		this.top = top;
	}

	public float getLeft() {
		return left;
	}

	public void setLeft(float left) {
		this.left = left;
	}

	public float getBottom() {
		return bottom;
	}

	public void setBottom(float bottom) {
		this.bottom = bottom;
	}

	public float getRight() {
		return right;
	}

	public void setRight(float right) {
		this.right = right;
	}

	public String getCategories() {
		return categories;
	}
	public String getCategoriesString() {
		if(categories != null && !categories.isEmpty()) {
		return String.join("|", categories);}
		else return "";
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	
	public String toBoxString() {
		return left +", "+ top + ", " + right + "," + bottom + ", 4326";
	}

	@Override
	public String toString() {
		return "BoxRequest [top=" + top + ", left=" + left + ", bottom=" + bottom + ", right=" + right + ", categories="
				+ categories + "]";
	}

	
}
