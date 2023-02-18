package com.foodapp.rest.r.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.rest.r.model.PlatformExecutive;
import com.foodapp.rest.r.repo.UserRepository;
import com.foodapp.rest.r.service.PlatformExecutiveService;


@RestController
@RequestMapping("/api/PlatformExecutive")
public class PlatformExecutiveController {
	@Autowired
	private PlatformExecutiveService platformExecutiveService;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	

@PostMapping("/add")
public ResponseEntity<String> postCustomer(@RequestBody PlatformExecutive platformExecutive) {	platformExecutiveService.postPlatformExecutive(platformExecutive);
	return ResponseEntity.status(HttpStatus.OK).body("platformExecutive added...");
}
	
	


	

	@GetMapping("/allplatformExecutive")
	public List<PlatformExecutive> getAllPlatformExecutive() {
		List<PlatformExecutive> list = platformExecutiveService.getAllPlatformExecutive();
		return list;
	}

	@GetMapping("/one/platformExecutive/{id}")
	public ResponseEntity<Object> getPlatformExecutiveById(@PathVariable("id") int id) {
		Optional<PlatformExecutive> optional = platformExecutiveService	.getById(id);
		if (!optional.isPresent()) {
			ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id given");
		}
		PlatformExecutive platformExecutive = optional.get();
		return ResponseEntity.status(HttpStatus.OK).body(platformExecutive);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteplatformExecutiveById(@PathVariable("id") int id){
		platformExecutiveService.deleteplatformExecutiveById(id);
		return ResponseEntity.status(HttpStatus.OK).body("platformExecutive deleted");
	}
}
