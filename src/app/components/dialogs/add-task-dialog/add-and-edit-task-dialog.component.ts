import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogAddOrEditData} from "../interfaces/DialogAddOrEditData";

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-and-edit-task-dialog.component.html',
  styleUrls: ['./add-and-edit-task-dialog.component.css']
})
export class AddAndEditTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAndEditTaskDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogAddOrEditData) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
