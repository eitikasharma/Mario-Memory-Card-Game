package com.example.springmongodemo.controller;

import com.example.springmongodemo.model.users;
import com.example.springmongodemo.service.PersonService;
//import com.example.springmongodemo.servlet.AuthorizePaymentServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

//    private AuthorizePaymentServlet aps;
    @RequestMapping("/create")
    public String create(@RequestParam String username,@RequestParam String email,@RequestParam String password) {
        users p = personService.create(username,email,password);
        return p.toString();
    }
    @RequestMapping(method= RequestMethod.POST,value="/create")
    public String create(@RequestBody users user)
    {
        personService.create(user.getUsername(),user.getEmail(),user.getPassword());
        return ("User created successfully");
    }
//    @RequestMapping("/get")
//    public users getPerson(@RequestParam String firstName) {
//        return personService.findByFirstName(firstName);
//    }

    @RequestMapping("/getAll")
    public List<users> getAllPerson() {

        return personService.getAll();

    }

//    @RequestMapping("/update")
//    public String update(@RequestParam String username, @RequestParam long mob) {
//        users p = personService.update(username, mob);
//        return p.toString();
//    }

//    @RequestMapping("/delete")
//    public String delete(@RequestParam String username) {
//        personService.delete(username);
//        return "Deleted " + username;
//    }

    @RequestMapping("/deleteAll")
    public String deleteAll() {
        personService.deleteAll();
        return "Deleted All Records!";
    }

}
