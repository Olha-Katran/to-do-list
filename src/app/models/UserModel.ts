import {AddressModel} from "./AddressModel";

export class UserModel {
  public id: number = 0
  public name: string
  public username: string
  public email: string
  public phone: string
  public address: AddressModel

  constructor(name: string, username: string, email: string, phone: string, address: AddressModel) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}
