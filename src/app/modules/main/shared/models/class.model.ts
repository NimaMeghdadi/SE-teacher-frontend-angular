export class ClassModel {
  title!: string;
  professor!: string;
  dataTime!: string;
  constructor(element: any) {
    this.title = element?.title;
    this.professor = element?.professor;
    this.dataTime = element?.dataTime;
  }
}
