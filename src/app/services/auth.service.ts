import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OTPModel } from '../models/auth/auth.model';
import { ChangeModel } from '../models/auth/change.model';
import { BaseApiService } from './base-api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager');
  }

  login = (params) => {
    return this.http.post(`api/SalesManager/Admin/Account/Login`, params);
  };

  changePassword = (params: ChangeModel) => {
    return this.http.post(`api/SalesManager/Admin/Account/ChangePassword`,params,);
  }

  getOTP = (params: OTPModel) => {
    return this.http.get(`api/SalesManager/otp/getotp?phonenumber=${params.PhoneNumber}&otptype=${params.otpType}`);
  }
}
