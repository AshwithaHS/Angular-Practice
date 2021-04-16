import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployeefromApi} from '../interfaces/iemployeefrom-api'

@Component({
  selector: 'app-employe-datafrom-api',
  templateUrl: './employe-datafrom-api.component.html',
  styleUrls: ['./employe-datafrom-api.component.css']
})
export class EmployeDatafromApiComponent implements OnInit {
employee:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get("https://jsonplaceholder.typicode.com/users");
    response.subscribe(data => this.employee = (data));
    console.log(data);
  }

}
function data(data: any) {
  throw new Error('Function not implemented.');
}

