package com.specialtask.employeesystem.service;


import com.specialtask.employeesystem.model.Employee;
import com.specialtask.employeesystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository repository;

    @Override
    public Employee saveEmployee(Employee employee){
        return repository.save(employee);

    }

    @Override
    public List<Employee> getAll(){
        return repository.findAll();
    }

}
