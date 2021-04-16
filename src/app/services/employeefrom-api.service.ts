import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmployeefromApi} from '../interfaces/iemployeefrom-api'


@Injectable({
  providedIn: 'root'
})
export class EmployeefromApiService {

  constructor(private http:HttpClient) { }
}
