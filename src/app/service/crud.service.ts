import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.serviceUrl = "http://localhost:8080/api/v1.0/tasks/todo"
    //"http://localhost:3000/tasks"
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.serviceUrl, task);
  }

  getAllTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.serviceUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(this.serviceUrl + `/` + task.id);
  }

  editTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.serviceUrl + `/` + task.id, task);
  }

}
