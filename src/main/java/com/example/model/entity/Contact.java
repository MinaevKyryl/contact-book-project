package com.example.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Contact {
    @Transient
    public static final String SEQUENCE_NAME = "contacts_sequence";

    @Id
    Long id;
    String fullName;
    String firstName;
    String lastName;
    String phoneNumber;
    String cellPhoneNumber;
    String address;

}
