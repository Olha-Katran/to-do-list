import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsComponent } from './components/inputs/inputs.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LoginServiceComponent } from './components/login-service/login-service.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    InputsComponent,
    LoginServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
