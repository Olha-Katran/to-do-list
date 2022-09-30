import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from "./UserService";
import {EMPTY, Observable} from "rxjs";
import {TaskModel} from "../models/TaskModel";
import * as http from "http";

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private readonly taskUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private userService: UserService,
              private httpClient: HttpClient) {
  }

  addTask(title: string): Observable<TaskModel> {
    let userId = this.userService.currentUser?.id ?? 11
    if (userId != null) {
      let newTask = new TaskModel(0, title, this.userService.currentUser?.id ?? 11)
      return this.httpClient.post<TaskModel>(this.taskUrl, newTask)
    }
    else {
      return EMPTY;
    }
  }

  editTask(taskToUpdate: TaskModel): Observable<TaskModel> {
    let userId = this.userService.currentUser?.id ?? 11
    if (userId != null) {
      return this.httpClient.put<TaskModel>(`${this.taskUrl}/${taskToUpdate.id}`, taskToUpdate)
    }
    else {
      return EMPTY;
    }
  }

  deleteTask(id: number): Observable<TaskModel> {
    let userId = this.userService.currentUser?.id ?? 11
    if (userId != null) {
      return this.httpClient.delete<TaskModel>(`${this.taskUrl}/${id}`)
    }
    else {
      return EMPTY;
    }
  }
}
