import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeData: EmployeeModel;
  readonly rootURL = 'https://angularemployees.azurewebsites.net/api/';
  public list : EmployeeModel[];

  constructor(
    private http: HttpClient
  ) { }

  postEmployee(){
    return this.http.post(this.rootURL, this.employeeData);
  }

  putEmployee(){
    console.log(this.employeeData);
    return this.http.put(this.rootURL + this.employeeData.empId, this.employeeData);
  }

  deleteEmployee(id){
    return this.http.delete(this.rootURL + id);
  }

  refreshList(){
    this.http.get(this.rootURL)
    .toPromise()
    .then(res => this.list = res as EmployeeModel[]);
  }
}
