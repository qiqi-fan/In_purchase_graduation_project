package org.example.model;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class Order implements Serializable {
    private Integer id;
    private LocalDateTime time;
}
