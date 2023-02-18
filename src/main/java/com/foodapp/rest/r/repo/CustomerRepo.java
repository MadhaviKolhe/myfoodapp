package com.foodapp.rest.r.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodapp.rest.r.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {
	
//	@Query("select c from Customer where c.customerName=?1")
//	Customer getCustomerByCustomerName(String customerName);

}
