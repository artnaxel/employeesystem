package com.specialtask.employeesystem.service;

import com.specialtask.employeesystem.model.Employee;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAll();
}
