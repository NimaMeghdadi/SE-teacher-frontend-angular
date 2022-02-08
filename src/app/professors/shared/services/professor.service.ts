import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class ProfessorsService {
  constructor(private gs: GlobalService) {}

  getProfessors() {
    return ApiRequest('GET', true)
      .controller('publishers')
      .action('')
      .call(this.gs);
  }

  addProfessor(model) {
    return ApiRequest("POST", true)
      .controller("publishers")
      .action("add")
      .addBodies(model)
      .call(this.gs);
  }

  deleteProfessor(publisher_id) {
    return ApiRequest("DELETE", true)
      .controller("publishers")
      .action("delete")
      .addParam("publisher_id", publisher_id)
      .call(this.gs);
  }
}
