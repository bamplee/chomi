package com.bamplee.chomi.api.application;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RouteServiceImplTest {
    @Autowired
    RouteService routeService;

    @Test
    public void route() {
        routeService.route(127.1058342, 37.359708, 126.9726394, 37.5531431);
    }
}