import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private globalService: GlobalService) {}

  login(model) {
    return ApiRequest('POST', true)
      .controller('login')
      .setBodyModel(model)
      .call(this.globalService);
  }
}
