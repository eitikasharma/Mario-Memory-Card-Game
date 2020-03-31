package com.example.springmongodemo.repository;

import com.example.springmongodemo.model.users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends MongoRepository<users, String> {
//    public users findByFirstName(String username);


}
