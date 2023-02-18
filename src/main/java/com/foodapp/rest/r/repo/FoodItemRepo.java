package com.foodapp.rest.r.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.rest.r.model.FoodItem;
import com.foodapp.rest.r.model.Menu;

public interface FoodItemRepo extends JpaRepository<FoodItem, Integer>{

	public FoodItem findByCategoryId(int ctid);
}
