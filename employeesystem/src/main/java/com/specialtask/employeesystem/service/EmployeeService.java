package com.specialtask.employeesystem.service;

import com.specialtask.employeesystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAll();
}
