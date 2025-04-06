import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().then(res => {
      this.employees = res.data.data.employees;
      console.log('Loaded employees:', this.employees); 
    }).catch(err => {
      console.error('Error fetching employees:', err); 
    });
  }
}
