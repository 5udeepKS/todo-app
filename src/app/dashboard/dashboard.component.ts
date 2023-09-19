import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr: Task[] = [];

  constructor(private readonly crudService: CrudService) {

  }
  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }

  getAllTasks() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to fetch the list of ToDos");
    })
  }

  addTask(eTask: Task) {
    this.crudService.addTask(eTask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert(err);
    })
  }

  editTask() {
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failer to update task")
    })
  }

  deleteTask(eTask: Task) {
    this.crudService.deleteTask(eTask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Something went wrong, unable to delete task!!")
    })
  }
}
