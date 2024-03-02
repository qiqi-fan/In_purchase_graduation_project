package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.model.Order;

import java.util.List;

@Mapper
public interface TestMapper {
    void insert(@Param("o") Order o);
    Order selectById(Integer id);
    List<Order> selectAll();
}
