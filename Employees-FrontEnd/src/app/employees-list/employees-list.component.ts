import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { EmployeeModel } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styles: [
  ]
})
export class EmployeesListComponent implements OnInit {
  public createEmployee = false;
  public empToEdit: number = 0;

  constructor(
    public service: EmployeeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.resetForm();
  }

  onSubmit(form:NgForm){
    if(this.empToEdit == 0){
      this.postCreateEmployee(form);
    }
    else{
      this.putEditEmployee(form);
    }
  }

  postCreateEmployee(form:NgForm){
    if(form.invalid){
      return;
    }
    this.service.postEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Employee data saved successfully', 'Employee Console')
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  putEditEmployee(form:NgForm){
    if(form.invalid){
      return;
    }
    this.service.putEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Employee data saved successfully', 'Employee Console')
        this.cancelEditEmployee();
      },
      err => {
        console.log(err);
      }
    )
  }

  createEmployeeClick(){
    this.service.employeeData = Object.assign({});
    this.createEmployee = true;
    this.cancelEditEmployee();
  }

  cancelCreateEmployee(){
    this.createEmployee = false;
  }

  editEmployeeClick(emp:EmployeeModel){
    this.service.employeeData = Object.assign({},emp);
    this.cancelCreateEmployee();
    this.empToEdit = emp.empId;
  }

  cancelEditEmployee(){
    this.empToEdit = null;
    this.empToEdit = 0;
  }

  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
    else{
      this.service.employeeData = {
        empId: 0,
        empName:'',
        empSurname:'',
        empJob:'',
        empSalary: 0,
      }
    }
  }

  deleteEmployee(id){
    if(confirm('Are you sure to delete employee with id '+id+'?')){
    this.service.deleteEmployee(id).subscribe(
      res =>{
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Employees Console');
      },
      err =>{
        console.log(err);
      }
    )
    }
  }
}
