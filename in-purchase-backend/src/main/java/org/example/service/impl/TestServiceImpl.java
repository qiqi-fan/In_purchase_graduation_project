package org.example.service.impl;

import org.example.mapper.TestMapper;
import org.example.model.Order;
import org.example.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService {
    @Autowired
    TestMapper testMapper;
    @Override
    public Integer add(int i1, int i2) {
        return i1 + i2;
    }

    @Override
    public void addOrder(Order o) {
        testMapper.insert(o);
    }

    @Override
    public List<Order> selectAll() {
        return testMapper.selectAll();
    }

}
