package com.example.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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
    @NotBlank(message = "Field should not be empty")
    @Size(min=2, max=30, message = "Field should be from 2 to 30 symbols")
    String fullName;
    @NotBlank(message = "Field should not be empty")
    @Size(min=2, max=15, message = "Field should be from 2 to 15 symbols")
    String firstName;
    @NotBlank(message = "Field should not be empty")
    @Size(min=2, max=15, message = "Field should be from 2 to 15 symbols")
    String lastName;
    @NotBlank(message = "Field should not be empty")
    @Pattern(regexp = "\\(?([0-9]{3})\\)?([ .-]?)([0-9]{2})\\2([0-9]{2})", message = "Phone number in wrong format")
    String phoneNumber;
    @NotBlank(message = "Field should not be empty")
    @Pattern(regexp = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.0-9]{9}$", message = "Cell phone number in wrong format")
    String cellPhoneNumber;
    @NotBlank(message = "Field should not be empty")
    String address;

}
