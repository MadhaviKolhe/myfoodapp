package com.foodapp.rest.r.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.rest.r.model.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant,Integer>{

}
