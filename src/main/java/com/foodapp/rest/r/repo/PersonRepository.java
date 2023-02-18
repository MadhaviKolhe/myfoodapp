package com.foodapp.rest.r.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.foodapp.rest.r.model.Person;



public interface PersonRepository extends JpaRepository<Person, Integer>{

	@Query("select p from Person p where p.email=?1")
	Person getPersonByEmail(String email);

}