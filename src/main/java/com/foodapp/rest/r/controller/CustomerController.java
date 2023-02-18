package com.foodapp.rest.r.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.rest.r.model.Customer;
import com.foodapp.rest.r.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	@Autowired
	private CustomerService customerService;

	@PostMapping("/add")
	public ResponseEntity<String> postCustomer(@RequestBody Customer customer) {
		customerService.postCustomer(customer);
		return ResponseEntity.status(HttpStatus.OK).body("customer added...");
	}

	@GetMapping("/allcustomers")
	public List<Customer> getAllCustomer() {
		List<Customer> list = customerService.getAllCustomer();
		return list;
	}

	@GetMapping("/one/customer/{id}")
	public ResponseEntity<Object> getCustomerById(@PathVariable("id") int id) {
		Optional<Customer> optional = customerService	.getById(id);
		if (!optional.isPresent()) {
			ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Id given");
		}
		Customer customer = optional.get();
		return ResponseEntity.status(HttpStatus.OK).body(customer);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteCustomerById(@PathVariable("id") int id){
		customerService.deleteCustomerById(id);
		return ResponseEntity.status(HttpStatus.OK).body("customer deleted");
	}
}
