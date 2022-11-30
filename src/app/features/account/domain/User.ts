export default class User {
  private _firstName: string;
  private _lastName: string;
  private _fullName: string;
  private _gender: string;
  private _avatar: string;
  private _email: string;
  private _password: string;

  constructor(
    firstName: string,
    lastName: string,
    fullName: string,
    gender: string,
    avatar: string,
    email: string,
    password: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = fullName;
    this._gender = gender;
    this._avatar = avatar;
    this._email = email;
    this._password = password;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get fullName(): string {
    return this._fullName;
  }
  public set fullName(value: string) {
    this._fullName = value;
  }

  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }

  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(value: string) {
    this._avatar = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}
