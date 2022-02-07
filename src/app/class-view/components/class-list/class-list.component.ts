import { getLocaleDateFormat } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ClassModel } from "../../shared/models/class.model";

@Component({
  selector: "app-class-list",
  templateUrl: "./class-list.component.html",
  styleUrls: ["./class-list.component.scss"],
})
export class ClassListComponent implements OnInit {
  list: Array<ClassModel> = [];
  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //get data
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
  }
}
