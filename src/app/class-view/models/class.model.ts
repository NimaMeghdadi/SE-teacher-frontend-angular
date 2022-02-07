export class ClassModel {
  id;
  professor;
  no;
  course;
  kind;
  date;
  price;
  title;
  gmail;
  bio;
  rezume;
  fname;
  lname;
  password;
  constructor(element: any) {
    this.id = element?.id;
    this.professor = element?.professor;
    this.no = element?.no;
    this.course = element?.course;
    this.kind = element?.kind;
    this.date = element?.date;
    this.price = element?.price;
    this.title = element?.title;
    this.gmail = element?.gmail;
    this.bio = element?.bio;
    this.rezume = element?.rezume;
    this.fname = element?.fname;
    this.lname = element?.lname;
    this.password = element?.password;
  }
}
