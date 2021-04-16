import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
public employee:any=[];
public errorMsg: any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      data => this.employee = data ,
     error => this.errorMsg = error
      );
  }

}
