import { Injectable } from "@angular/core";
import { GlobalService } from "src/app/core/services/global.service";
import { ApiRequest } from "src/app/core/services/request.service";

@Injectable({
  providedIn: "root",
})
export class ManagementService {
  constructor(private gs: GlobalService) {}

  getUsers() {
    return ApiRequest("GET", true)
      .controller("management")
      .action("user/search")
      .call(this.gs);
  }

  addUser(model) {
    return ApiRequest("POST", true)
      .controller("management")
      .action("user/add")
      .addBodies(model)
      .call(this.gs);
  }

  editUser(model) {
    return ApiRequest("POST", true)
      .controller("management")
      .action("user/edit")
      .addBodies(model)
      .call(this.gs);
  }

  deActiveUser(gmail) {
    return ApiRequest("POST", true)
      .controller("management")
      .action("user/deactivate")
      .addBody("gmail", gmail)
      .call(this.gs);
  }

  activeUser(gmail) {
    return ApiRequest("POST", true)
      .controller("management")
      .action("user/activate")
      .addBody("gmail", gmail)
      .call(this.gs);
  }

  deleteUser(publisher_id) {
    return ApiRequest("DELETE", true)
      .controller("management")
      .action("user/delete")
      .addParam("publisher_id", publisher_id)
      .call(this.gs);
  }
}
