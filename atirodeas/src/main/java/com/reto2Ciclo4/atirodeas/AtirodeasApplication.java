package com.reto2Ciclo4.atirodeas;

import com.reto2Ciclo4.atirodeas.repository.crud.AccessoryCrudRepository;
import com.reto2Ciclo4.atirodeas.repository.crud.OrderCrudRepository;
import com.reto2Ciclo4.atirodeas.repository.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
public class AtirodeasApplication implements CommandLineRunner {
	@Autowired
	private UserCrudRepository userRepo;
	@Autowired
	private AccessoryCrudRepository accessoryCrud;

	@Autowired
	private OrderCrudRepository orderCrud;

	public static void main(String[] args)
	{
		SpringApplication.run(AtirodeasApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Aqui se ejecutaran la creación de documentos de mongo...");

		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");


		userRepo.deleteAll();

		accessoryCrud.deleteAll();

		orderCrud.deleteAll();


	}
}
