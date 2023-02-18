package com.foodapp.rest.r.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.rest.r.model.FoodItem;
import com.foodapp.rest.r.model.Menu;
import com.foodapp.rest.r.repo.FoodItemRepo;
@Service
public class FoodItemService {
	@Autowired
	private FoodItemRepo foodItemRepo;
	
	public void postCategory(FoodItem foodItem) {
	foodItemRepo.save(foodItem);
	}
	public List<FoodItem> getAllFoodItem() {
	// TODO Auto-generated method stub
	return foodItemRepo.findAll();
	}
	public Optional<FoodItem> getById(int id) {
	 // TODO Auto-generated method stub
	Optional<FoodItem> optional = foodItemRepo.findById(id);
	return optional;
	}
	

	public void deleteFoodItemById(int id) {
	// TODO Auto-generated method stub
	foodItemRepo.deleteById(id);
	}

	public FoodItem findByCategoryId(int id) {
		FoodItem foodItem = foodItemRepo.findByCategoryId(id);
		return foodItem;
	}
	

}
