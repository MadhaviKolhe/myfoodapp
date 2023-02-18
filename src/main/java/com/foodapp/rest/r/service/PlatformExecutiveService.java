package com.foodapp.rest.r.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodapp.rest.r.model.PlatformExecutive;

import com.foodapp.rest.r.repo.PlatformExecutiveRepo;
@Service
public class PlatformExecutiveService {

	@Autowired
	private PlatformExecutiveRepo platformExecutiveRepo;
	public void postPlatformExecutive(PlatformExecutive platformExecutive) {
		// TODO Auto-generated method stub
		platformExecutiveRepo.save(platformExecutive);
	}
	
	public List<PlatformExecutive> getAllPlatformExecutive() {
		// TODO Auto-generated method stub
		return platformExecutiveRepo.findAll();
	}

	
	public Optional<PlatformExecutive> getById(int id) {
		// TODO Auto-generated method stub
		Optional<PlatformExecutive> optional = platformExecutiveRepo.findById(id);
		return optional;
	}

	public void deleteplatformExecutiveById(int id) {
		// TODO Auto-generated method stub
		platformExecutiveRepo.deleteById(id);
	}

}
