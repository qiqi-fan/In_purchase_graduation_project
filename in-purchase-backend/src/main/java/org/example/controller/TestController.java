package org.example.controller;

import org.example.model.Order;
import org.example.service.TestService;
import org.example.service.impl.TestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/test/")
public class TestController {
    @Autowired
    TestService testService;
    @GetMapping("hello")
    public String hello(@RequestParam("num1") Integer i1,@RequestParam("num2") Integer i2){
        Integer res = testService.add(i1, i2);
        return "hello"+res;
    }
    @GetMapping("/world")
    public String world(){
        return "world";
    }
    @PostMapping("/order")
    public void addOrder(@RequestBody Order o){
        testService.addOrder(o);
    }
    @GetMapping("/list")
    public List<Order> list(){
        return testService.selectAll();
    }
}
