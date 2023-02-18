package com.foodapp.rest.r.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "restaurant")
public class Restaurant {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	


	private String restaurantName;
	
		public int getId() {
	return id;
	}
	public void setId(int id) {
	this.id = id;
	}
	public String getRestaurantName() {
	return restaurantName;
	}
	public void setRestaurantName(String restaurantName) {
	this.restaurantName = restaurantName;
	}
	
	@OneToOne
	@JoinColumn(name = "menu_id")
	private Menu menu;
	
	
	public Menu getMenu() {
		return menu;
	}
	public void setMenu(Menu menu) {
		this.menu = menu;
	}


}
