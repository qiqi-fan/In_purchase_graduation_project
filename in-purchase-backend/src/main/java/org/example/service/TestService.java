package org.example.service;


import org.example.model.Order;

import java.util.List;

public interface TestService {
    Integer add(int i1,int i2);
    void addOrder(Order o);
    List<Order> selectAll();
}
