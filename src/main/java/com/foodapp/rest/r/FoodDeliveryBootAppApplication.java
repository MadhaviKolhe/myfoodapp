package com.foodapp.rest.r;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)


public class FoodDeliveryBootAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryBootAppApplication.class, args);
	}

}
