import {Component, OnInit} from '@angular/core';
import { TaskModel } from '../../models/TaskModel';
import { MatDialog } from "@angular/material/dialog";
import {AddAndEditTaskDialogComponent} from "../dialogs/add-task-dialog/add-and-edit-task-dialog.component";
import {ConfirmDeleteDialogComponent} from "../dialogs/confirm-delete-dialog/confirm-delete-dialog.component";
import {TaskService} from "../../services/TaskService";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  Tasks: TaskModel[]

  constructor(public dialog: MatDialog,
              private taskService: TaskService) {
    this.Tasks = [
      new TaskModel(1, 'Respond to Mike’s email', 11, true) ,
      new TaskModel(2, 'Schedule a new apartment overview (Details: Sarah, 215 Newarc Drive, New Jersey, 202-555-0183)', 11) ,
      new TaskModel(3, 'Make edits to current development plan based on feedback from the last stakeholders meeting, send to John afterwards the edits were made. Notify everybody in Slack',11) ,
      new TaskModel(4, 'Put together a development plan',11, true) ,
      new TaskModel(5, 'Conduct project overview and estimation session with the team. Make sure everybody takes part in the estimation process', 11)
    ]
  }

  ngOnInit(): void {

  }

  addTask() : void {
    const dialogRef = this.dialog.open(AddAndEditTaskDialogComponent, {
      width: '560px',
      height: '300px',
      data: { title: '', isNew: true }
    });

    dialogRef.afterClosed().subscribe(newTaskTitle => {
      console.log(newTaskTitle)
      this.taskService.addTask(newTaskTitle).subscribe(newTask => {
        // handle error case, when newTask is missing because of missing userId
        this.Tasks.unshift(newTask)
      })
    });
  }

  editTask(id: number) : void {
    let currentTask = this.Tasks.find(task => task.id == id);
    if(currentTask) {
      const dialogRef = this.dialog.open(AddAndEditTaskDialogComponent, {
        width: '560px',
        height: '300px',
        data: { title: currentTask.title, isNew: false }
      });

      dialogRef.afterClosed().subscribe(newTaskTitle => {
        console.log(newTaskTitle)
        if (currentTask!.title !== newTaskTitle) {
          this.taskService.editTask(currentTask!).subscribe(_ => {
            //we don't need a return value from API
            currentTask!.title = newTaskTitle;
          })
        }
      });
    }
  }

  deleteTask(id: number) : void {
    let taskToDelete = this.Tasks.find(task => task.id == id);
    if (taskToDelete) {
      const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
        width: '560px',
        data: { title: taskToDelete.title }
      });

      dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this.taskService.deleteTask(taskToDelete!.id).subscribe(_ => {
            //we don't need a return value from API
            let index = this.Tasks.indexOf(taskToDelete!)
            this.Tasks.splice(index, 1)
          })
        }
      });
    }
  }
}
