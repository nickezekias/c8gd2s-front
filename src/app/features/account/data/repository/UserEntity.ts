export default class UserEntity {
  public firstName: string;
  public lastName: string;
  public fullName: string;
  public gender: string;
  public avatar: string;
  public email: string;
  public password: string;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    avatar: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = "";
    this.gender = gender;
    this.avatar = avatar;
    this.email = email;
    this.password = password;
  }
}
