import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpPageComponent } from './components/container/sign-up-page.component';
import { CreateAccountHeaderComponent } from './components/create-account-header/create-account-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsComponent } from './components/inputs/inputs.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MainContainerComponent } from './components/main-container/main-container.component';
import { TaskListPageComponent } from './components/list-container/task-list-page.component';
import { RouterModule } from '@angular/router';
import { AddAndEditTaskDialogComponent } from './components/dialogs/add-task-dialog/add-and-edit-task-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from './components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    CreateAccountHeaderComponent,
    InputsComponent,
    HeaderComponent,
    TodoListComponent,
    MainContainerComponent,
    TaskListPageComponent,
    AddAndEditTaskDialogComponent,
    ConfirmDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: SignUpPageComponent},
      {path: 'app-list-container', component: TaskListPageComponent},
    ]),
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
