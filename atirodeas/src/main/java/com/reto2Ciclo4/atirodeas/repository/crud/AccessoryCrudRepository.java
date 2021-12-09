package com.reto2Ciclo4.atirodeas.repository.crud;

import com.reto2Ciclo4.atirodeas.model.Accessory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccessoryCrudRepository extends MongoRepository<Accessory, String> {
}
