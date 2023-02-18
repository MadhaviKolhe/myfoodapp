package com.foodapp.rest.r.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.rest.r.model.Person;
import com.foodapp.rest.r.repo.PersonRepository;





@CrossOrigin(origins = {"*"})
@RestController
public class TestController {

	@Autowired
	private PersonRepository personRepository;

	@PostMapping("/person/add")
	public ResponseEntity<Object> postUser(@RequestBody Person person) {
		Person pDB = personRepository.getPersonByEmail(person.getEmail());

		if(pDB != null) {
			Message m = new Message();
			m.setMsg("Email already registered");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(m);
		}

		return ResponseEntity.status(HttpStatus.OK).body(personRepository.save(person));

	}

	@GetMapping("/person/all")
	public List<Person> getAllPerson() {
		return personRepository.findAll();
	}
}


class Message{
	private String msg;

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	} 


}