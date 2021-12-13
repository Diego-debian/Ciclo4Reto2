package com.reto2Ciclo4.atirodeas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Diego Parra
 *
 */
@Document(collection = "accessories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Accessory {
    @Id
    private String reference;
    private String brand;
    private String category;
    private String material;
    private String description;
    private double price;
    private boolean availability = true;
    private int quantity;
    private String photography;
}
