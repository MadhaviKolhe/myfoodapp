package com.foodapp.rest.r.service;

import java.util.List;

import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.rest.r.model.Restaurant;
import com.foodapp.rest.r.repo.RestaurantRepo;

@Service
public class RestaurantService {
	@Autowired
	private RestaurantRepo restaurantRepo;
	public void postRestaurant(Restaurant restaurant) {
	restaurantRepo.save(restaurant);
	}
	public List<Restaurant> getAllRestaurant() {
	// TODO Auto-generated method stub
	return restaurantRepo.findAll();
	}
	public Optional<Restaurant> getById(int id) {
	// TODO Auto-generated method stub
	Optional<Restaurant> optional = restaurantRepo.findById(id);
	return optional;
	}
	public void deleteRestaurantById(int id) {
	 // TODO Auto-generated method stub
	restaurantRepo.deleteById(id);
	}
}
