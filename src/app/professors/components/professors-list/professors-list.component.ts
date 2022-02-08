import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TableField } from "dynamic-mat-table";
import { BehaviorSubject } from "rxjs";
import { map, take } from "rxjs/operators";
import { Toaster } from "src/app/core/toast-notification";
import { ActionItem } from "src/app/shared/components/action-list/action-list.component";
import { ProfessorModel } from "../../shared/models/professor.model";
import { ProfessorsService } from "../../shared/services/professor.service";

@Component({
  selector: "app-professors-list",
  templateUrl: "./professors-list.component.html",
  styleUrls: ["./professors-list.component.scss"],
})
export class ProfessorsListComponent implements OnInit {
  tabIndex = 0;
  model = [];
  form = new FormGroup({});
  formFields: FormlyFieldConfig[] = [];

  tableFields: TableField<any>[] = [
    {
      name: "fullName",
      header: "Name",
      cellEllipsisRow: 2,
    },
    {
      name: "email",
      header: "Email",
    },
    {
      name: "province_state",
      header: "State",
    },
    {
      name: "city_town",
      header: "City",
    },
  ];
  tableDataSource = new BehaviorSubject<any[]>([]);
  selectedRows: Array<any> = [];
  actionItems: ActionItem[] = [
    { id: 1, text: "Add", matIcon: "add_box", tooltip: "Add" },
    { id: 2, text: "Modify", matIcon: "edit", tooltip: "Modify" },
    { id: 3, text: "Delete", matIcon: "delete", tooltip: "Delete" },
  ];
  constructor(
    private professorsService: ProfessorsService,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  getData() {
    this.professorsService
      .getProfessors()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new ProfessorModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }

  onSubmitForm() {
    this.professorsService.addProfessor(this.model).subscribe((res: any) => {
      // if (res[0].publisher_add) {
      this.getData();
      this.onCancel();
      // }
    });
  }

  initEditData(data) {
    this.tabIndex = 1;
    this.model = { ...data };
  }

  deleteItem(itemID) {
    this.professorsService.deleteProfessor(itemID).subscribe((res) => {
      // if (res.success) {
      this.getData();
      // }
    });
  }

  onCancel() {
    this.tabIndex = 0;
    this.model = [];
    this.form.reset();
    this.form.markAsUntouched();
  }

  onRowSelect(event) {
    if (
      event.event == "MasterSelectionChange" ||
      event.event == "RowSelectionChange"
    ) {
      this.selectedRows = event.sender?.selected;
    }
  }

  onActionMenu(event: ActionItem) {
    switch (event.text) {
      case "Add":
        this.tabIndex = 1;
        break;
      case "Delete":
        if (this.selectedRows.length > 0) {
          this.deleteItem(this.selectedRows[0].publisher_id);
        } else {
          this.toaster.open({
            caption: "Event Message",
            text: "Please select an item",
          });
        }
        break;
      case "Modify":
        if (this.selectedRows.length > 0) {
          this.initEditData(this.selectedRows[0]);
        } else {
          this.toaster.open({
            caption: "Event Message",
            text: "Please select an item",
          });
        }
        break;
    }
  }

  initForm() {
    this.formFields = [
      {
        fieldGroupClassName: "flex-container",
        fieldGroup: [
          {
            className: "flex-50 padding-x-5",
            key: "first_name",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "first_name",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "last_name",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "last_name",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "email",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "email",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "province_state",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "province_state",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "city_town",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "city_town",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "street",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "street",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "alley",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "alley",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "plaque_number",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              type: "number",
              label: "plaque_number",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "floor_number",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              type: "number",
              label: "floor_number",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "unit_number",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              type: "number",
              label: "unit_number",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "zipcode",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "zipcode",
            },
          },
        ],
      },
    ];
  }
}
