import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TableField } from "dynamic-mat-table";
import { BehaviorSubject } from "rxjs";
import { map, take } from "rxjs/operators";
import { Toaster } from "src/app/core/toast-notification";
import { ProfileService } from "src/app/profile/shared";
import { ActionItem } from "src/app/shared/components/action-list/action-list.component";
import { UserModel } from "../../shared/models/user-list.model";
import { ManagementService } from "../../shared/services/management.service";

@Component({
  selector: "app-users-management",
  templateUrl: "./users-management.component.html",
  styleUrls: ["./users-management.component.scss"],
})
export class UsersManagementComponent implements OnInit {
  tabIndex = 0;
  model = [];
  form = new FormGroup({});
  formFields: FormlyFieldConfig[] = [];
  roles = new BehaviorSubject<Array<any>>([]);
  editMode = false;

  tableFields: TableField<any>[] = [
    {
      name: "fname",
      header: "F Name",
      cellEllipsisRow: 2,
    },
    {
      name: "lname",
      header: "L Name",
      cellEllipsisRow: 2,
    },
    {
      name: "gmail",
      header: "Email",
    },
    {
      name: "Status",
      header: "Status",
    },
  ];
  tableDataSource = new BehaviorSubject<any[]>([]);
  selectedRows: Array<any> = [];
  actionItems: ActionItem[] = [
    { id: 1, text: "Add", matIcon: "add_box", tooltip: "Add" },
    { id: 2, text: "Modify", matIcon: "edit", tooltip: "Modify" },
    { id: 3, text: "DeActivate", matIcon: "do_disturb", tooltip: "DeActivate" },
    { id: 3, text: "Activate", matIcon: "check_circle", tooltip: "Activate" },
  ];
  constructor(
    private managementService: ManagementService,
    private profileService: ProfileService,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {
    this.getData();
    this.initForm();
    this.profileService.getRoles().subscribe((data: any) => {
      this.roles.next(data);
    });
  }

  getData() {
    this.managementService
      .getUsers()
      .pipe(
        take(1),
        map((res: any) => {
          return res.map((value) => new UserModel(value));
        })
      )
      .subscribe((res) => {
        this.tableDataSource.next(res);
      });
  }

  onSubmitForm() {
    if (!this.editMode){
      this.managementService.addUser(this.model).subscribe((res: any) => {
        // if (res[0].publisher_add) {
        this.getData();
        this.onCancel();
        // }
      });
    } else {
      this.managementService.editUser(this.model).subscribe((res: any) => {
        // if (res[0].publisher_add) {
        this.getData();
        this.onCancel();
        // }
      })
    }
  }

  initEditData(data) {
    this.tabIndex = 1;
    this.editMode = true;
    this.model = { ...data };
  }

  deleteItem(itemID) {
    this.managementService.deActiveUser(itemID).subscribe((res) => {
      // if (res.success) {
      this.getData();
      // }
    });
  }

  activeItem(itemID) {
    this.managementService.activeUser(itemID).subscribe((res) => {
      // if (res.success) {
      this.getData();
      // }
    });
  }

  onCancel() {
    this.tabIndex = 0;
    this.model = [];
    this.editMode = false;
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
      case "DeActivate":
        if (this.selectedRows.length > 0) {
          this.deleteItem(this.selectedRows[0].gmail);
        } else {
          this.toaster.open({
            caption: "Event Message",
            text: "Please select an item",
          });
        }
        break;
      case "Activate":
        if (this.selectedRows.length > 0) {
          this.activeItem(this.selectedRows[0].gmail);
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
            key: "fname",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "first name",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "lname",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "last name",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "gmail",
            type: "input",
            templateOptions: {
              required: true,
              appearance: "outline",
              label: "email",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "password",
            type: "input",
            templateOptions: {
              required: true,
              type: "password",
              appearance: "outline",
              label: "password",
            },
          },
          {
            className: "flex-50 padding-x-5",
            key: "roleid",
            type: "select",
            templateOptions: {
              options: this.roles,
              labelProp: "title",
              valueProp: "roleid",
              appearance: "outline",
              label: "role",
            },
          },
        ],
      },
    ];
  }
}
