package com.foodapp.rest.r.service;

//import java.util.ArrayList;

//import java.util.Collections;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.foodapp.rest.r.model.Customer;
import com.foodapp.rest.r.repo.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepo customerRepo;

	public void postCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerRepo.save(customer);
	}

	public List<Customer> getAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
	}

	public Optional<Customer> getById(int id) {
		// TODO Auto-generated method stub
		Optional<Customer> optional = customerRepo.findById(id);
		return optional;
	}

	public void deleteCustomerById(int id) {
		// TODO Auto-generated method stub
		customerRepo.deleteById(id);
	}

	//@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Customer customer = customerRepo.getCustomerByCustomerName(username);
//
//		Collections<GrantedAuthority> list = new ArrayList<>();
//		SimpleGrantedAuthority sga = new SimpleGrantedAuthority(customer.getRole());
//		list.add(sga);
//
//		org.springframework.security.core.userdetails.Use springUser = new org.springframework.security.core.userdetails.User(
//				customer.getCustomerName(), customer.getPassword(), list);
//
//		return springUser;
//	}

}
