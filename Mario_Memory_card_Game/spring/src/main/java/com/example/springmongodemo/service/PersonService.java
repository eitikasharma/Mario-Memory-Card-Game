package com.example.springmongodemo.service;

import com.example.springmongodemo.model.users;
import com.example.springmongodemo.repository.PersonRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PersonService  {

    @Autowired
    private PersonRepository personRepository;
    //CreateOperation
    public users create(String username, String email, String password) {
        return personRepository.save(new users(username ,email,password));
        
    }

    //RetrieveOperation
    public List<users> getAll() {

        return personRepository.findAll();
        
    }

//    public users findByFirstName(String firstName) {
//        return personRepository.findByFirstName(firstName);
//    }

    //UpdateOperation
//    public users update(String username, long mob) {
//        users p = personRepository.findByFirstName(username);
//
//        p.setMob(mob);
//        return personRepository.save(p);
//    }

    //DeleteOperation
    public void deleteAll() {
        personRepository.deleteAll();
    }

//    public void delete(String username) {
//        users p = personRepository.findByFirstName(username);
//        personRepository.delete(p);
//    }
}
