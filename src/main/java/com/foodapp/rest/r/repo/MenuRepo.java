package com.foodapp.rest.r.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodapp.rest.r.model.Menu;
import com.foodapp.rest.r.model.Restaurant;

public interface MenuRepo extends JpaRepository<Menu, Integer>{
	
	

	
	public Menu findByRestaurantId(int rid);

	

	
	
}
