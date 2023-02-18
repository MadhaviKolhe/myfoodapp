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

import com.foodapp.rest.r.model.Restaurant;
import com.foodapp.rest.r.service.RestaurantService;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {
	@Autowired
	private RestaurantService restaurantService;
	@PostMapping("/add")
	public ResponseEntity<String> postRestaurant(@RequestBody Restaurant restaurant) {
	return ResponseEntity.status(HttpStatus.OK).body("Restaurant added...");
	}
	
	@GetMapping("/allrestaurant")
	public List<Restaurant> getAllRestaurant() {
	List<Restaurant> list = restaurantService.getAllRestaurant();
	return list;
	}
	
	
	@GetMapping("/one/restaurant/{id}")
	public ResponseEntity<Object> getRestaurantById(@PathVariable("id") int id) {
	Optional<Restaurant> optional = restaurantService.getById(id);
	if (!optional.isPresent()) {
	ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id given");
	}
	Restaurant restaurant = optional.get();
	return ResponseEntity.status(HttpStatus.OK).body(restaurant);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteRestaurantById(@PathVariable("id") int id){
	restaurantService.deleteRestaurantById(id);
	return ResponseEntity.status(HttpStatus.OK).body("Restaurant deleted");
	}
	
}
