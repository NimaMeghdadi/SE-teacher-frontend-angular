import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-class-card",
  templateUrl: "./class-card.component.html",
  styleUrls: ["./class-card.component.scss"],
})
export class ClassCardComponent implements OnInit {
  @Input("data") data: any;
  constructor() {}

  ngOnInit(): void {}
}
