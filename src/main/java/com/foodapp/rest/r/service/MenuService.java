package com.foodapp.rest.r.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.foodapp.rest.r.model.Menu;
import com.foodapp.rest.r.model.Restaurant;
import com.foodapp.rest.r.repo.MenuRepo;
import com.foodapp.rest.r.repo.RestaurantRepo;

@Service
public class MenuService {

	
	@Autowired
	private MenuRepo menuRepo;
	
	@Autowired
	private RestaurantRepo restaurantRepo;
	
	public void postMenu(Menu menu) {
		menuRepo.save(menu);
	}

	public List<Menu> getAllMenu() {
		// TODO Auto-generated method stub
		List<Menu> optional = menuRepo.findAll();
		return optional;
	}
	
	public Optional<Menu> getById(int id) {
		Optional<Menu> optional = menuRepo.findById(id);
		return optional;
	}
	
	
	public void updateMenuById(Menu menu) {
		// TODO Auto-generated method stub
      menuRepo.save(menu);
		}
	
	public void deleteMenuById(int id) {
		menuRepo.deleteById(id);
	}
	
	
	
	public Menu findByRestaurantId(int id) {
		Menu menu = menuRepo.findByRestaurantId(id);
		return menu;
	}
	
}

