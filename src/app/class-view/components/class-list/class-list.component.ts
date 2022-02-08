import { getLocaleDateFormat } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { map, take } from "rxjs/operators";
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
  loading = false;
  constructor(private gs: GlobalService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //get data
    this.onSearch({});
  }

  onSearch(model: { [key: string]: string | number }) {
    this.loading = true;
    ApiRequest("GET")
      .controller("classes")
      .action("search")
      .addParams(model)
      .call(this.gs)
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((el) => new ClassModel(el));
        })
      )
      .subscribe((resp) => {
        this.loading = false;
        this.list = resp;
      });
  }
}
