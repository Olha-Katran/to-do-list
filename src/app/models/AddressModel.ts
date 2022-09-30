export class AddressModel {
  public street: string
  public city: string
  public suite: string
  public zipcode: string

  constructor(street: string, city: string, suite: string, zipcode: string) {
    this.street = street;
    this.city = city;
    this.suite = suite;
    this.zipcode = zipcode;
  }
}
