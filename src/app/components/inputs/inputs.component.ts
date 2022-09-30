import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginService} from "../../services/LoginService";
import {UserModel} from "../../models/UserModel";
import {ErrorStateMatcher} from "@angular/material/core";
import {AddressModel} from "../../models/AddressModel";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inputs-component',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})

export class InputsComponent  {

  public myForm: FormGroup
  public readonly name: FormControl
  public readonly username: FormControl
  public readonly email: FormControl
  public readonly phone: FormControl
  public readonly addressLine: FormControl
  public readonly suite: FormControl
  public readonly city: FormControl
  public readonly zipCode: FormControl

  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService) {
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.phone = new FormControl('', [Validators.required])
    this.name = new FormControl('', [Validators.required])
    this.username = new FormControl('', [Validators.required])
    this.addressLine = new FormControl('', [Validators.required])
    this.suite = new FormControl('')
    this.city = new FormControl('', [Validators.required])
    this.zipCode = new FormControl('', [Validators.required])

    this.myForm = new FormGroup({
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      addressLine: this.addressLine,
      suite: this.suite,
      city: this.city,
      zipCode: this.zipCode,
    })
  }

  onSignUpClick() : void {
    if (this.myForm.valid) {

      let addressModel = new AddressModel(
        this.addressLine.value,
        this.city.value,
        this.suite.value,
        this.zipCode.value);

      let userModel = new UserModel(
        this.name.value,
        this.username.value,
        this.email.value,
        this.phone.value,
        addressModel)

      this.loginService.signUp(userModel)
    }
  }
}
