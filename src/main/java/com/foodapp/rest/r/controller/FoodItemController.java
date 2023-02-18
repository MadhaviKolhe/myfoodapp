package com.foodapp.rest.r.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.rest.r.model.FoodItem;
import com.foodapp.rest.r.model.Menu;
import com.foodapp.rest.r.service.FoodItemService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/foodItem")
public class FoodItemController {
	@Autowired
	private FoodItemService foodItemService;
	
	@PostMapping("/add")
	public ResponseEntity<String> postFoodItem(@RequestBody FoodItem foodItem) {
	foodItemService.postCategory(foodItem);
	return ResponseEntity.status(HttpStatus.OK).body("FoodItem added...");
	}
	@GetMapping("/allfoodItem")
	public List<FoodItem> getAllFoodItem() {
	List<FoodItem> list = foodItemService.getAllFoodItem();
	return list;
	}
	
	@GetMapping("/one/foodItem/{id}")
	public ResponseEntity<Object> getFoodItemById(@PathVariable("id") int id) {
	Optional<FoodItem> optional = foodItemService.getById(id);
	if (!optional.isPresent()) {
	ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id given");
	}
	FoodItem foodItem = optional.get();
	return ResponseEntity.status(HttpStatus.OK).body(foodItem);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteFoodItemById(@PathVariable("id") int id){
	foodItemService.deleteFoodItemById(id);
	return ResponseEntity.status(HttpStatus.OK).body("FoodItem deleted");
	}
	
	
	@GetMapping("/foodItem/{ctid}")
	public FoodItem getRestaurant(@PathVariable("ctid") int ctid) {
		FoodItem foodItemResponse = foodItemService.findByCategoryId(ctid);
		return foodItemResponse;
	}

	
}
