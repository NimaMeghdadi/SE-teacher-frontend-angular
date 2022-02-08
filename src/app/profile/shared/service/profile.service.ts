import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private gs: GlobalService) {}

  getMySearchs(pageName: string, userID: number) {
    return ApiRequest('GET', true)
      .controller('Report')
      .action('Search')
      .addParam('PageName', pageName)
      .addParam('UserID', userID)
      .call(this.gs);
  }

  deleteSavedSearch(searchID: number) {
    return ApiRequest('DELETE', true)
      .controller('Report')
      .action('Delete')
      .addParam('ReportPreferenceDetailID', searchID)
      .call(this.gs);
  }

  editSavedSearch(model: { Config: string; ReportPreferenceDetailID?: number, ReportName: string}) {
    return ApiRequest('POST', true)
      .controller('Report')
      .action('Add')
      .addBodies(model)
      .call(this.gs);
  }
}
