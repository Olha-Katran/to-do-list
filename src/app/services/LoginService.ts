import { UserModel } from "../models/UserModel";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from "./UserService";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly signUpUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private router: Router) {

  }

  signUp(model: UserModel) : void {
    this.httpClient.post<UserModel>(this.signUpUrl, model).subscribe(newUserModel => {
      this.userService.currentUser = newUserModel;
      if (newUserModel.id != 0)
      {
        console.log("Hello")
        this.router.navigate(['/app-list-container'])
      }
    })
  }

}
