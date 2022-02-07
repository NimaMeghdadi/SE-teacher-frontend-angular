import { getLocaleDateFormat } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "src/app/core/services/global.service";
import { ApiRequest } from "src/app/core/services/request.service";
import { ClassModel } from "../../models/class.model";

@Component({
  selector: "app-class-list",
  templateUrl: "./class-list.component.html",
  styleUrls: ["./class-list.component.scss"],
})
export class ClassListComponent implements OnInit {
  list: Array<ClassModel> = [];
  constructor(private gs: GlobalService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //get data
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
  }

  onSearch(model: { [key: string]: string | number }) {
    ApiRequest("GET")
      .controller("classes")
      .action("search")
      .addParams(model)
      .call(this.gs)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
