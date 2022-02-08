export class UserModel {
  gmail;
  fname;
  lname;
  password;
  isactive;
  Status;
  constructor(element) {
    this.gmail = element?.gmail;
    this.fname = element?.fname;
    this.lname = element?.lname;
    this.password = element?.password;
    this.isactive = element?.isactive;
    this.Status = element.isactive ? "Activated" : "Deactivated";
  }
}
