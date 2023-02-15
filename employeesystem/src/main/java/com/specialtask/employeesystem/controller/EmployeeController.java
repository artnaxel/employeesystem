package com.specialtask.employeesystem.controller;

import com.specialtask.employeesystem.model.Employee;
import com.specialtask.employeesystem.service.EmployeeService;
import com.specialtask.employeesystem.service.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee){
        employeeService.saveEmployee((employee));
        return "New employee added...";
    }

    @GetMapping("/getAll")
    public List<Employee> getAll(){
        return employeeService.getAll();
    }
}
