import { UserModel } from "../models/UserModel";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _currentUser: UserModel|null = null

  constructor() {
    console.log("UserService init!")
  }

  public get currentUser() : UserModel|null {
    return this._currentUser
  }

  public set currentUser(newUser: UserModel|null) {
    this._currentUser = newUser;
  }
}
