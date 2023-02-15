package com.specialtask.employeesystem.service;


import com.specialtask.employeesystem.model.Employee;
import com.specialtask.employeesystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Component
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository repository;

    @Override
    @PostMapping("/saveEmployee")
    public Employee saveEmployee(Employee employee){
        return repository.save(employee);

    }

    public EmployeeServiceImpl() {
    }

    @Override
    @GetMapping("/getAll")
    public List<Employee> getAll(){
        return repository.findAll();
    }

}
