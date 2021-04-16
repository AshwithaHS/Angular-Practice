import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, observable, throwError } from 'rxjs';
import {EmpInterface  } from '../interfaces/emp-interface';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private url="/assets/data/emp.json";
  constructor(private http:HttpClient) { }

  getEmployee():Observable<EmpInterface[]>{
    return this.http.get<EmpInterface[]>(this.url).pipe(
      catchError((error:HttpErrorResponse)=>{
        return throwError(error.message||'server error');
      })
    );
  }
}
