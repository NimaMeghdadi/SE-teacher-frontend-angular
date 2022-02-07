import { getLocaleDateFormat } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ClassModel } from "@app/class-view/models/class.model";
import { ApiRequest, GlobalService, ParamsHandler } from "@app/core";

@Component({
  selector: "app-class-list",
  templateUrl: "./class-list.component.html",
  styleUrls: ["./class-list.component.scss"],
})
export class ClassListComponent implements OnInit {
  list: Array<ClassModel> = [];
  constructor(private _globalService : GlobalService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    //get data
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
    this.list.push(new ClassModel({ title: "English class" }));
  }

  onSearch(  model: { [key: string]: string | number }){
    ApiRequest('GET').controller('classes').action('search').addParams(model).call(this._globalService).subscribe((resp) => {
      console.log(resp);
      
    })
  }
}
