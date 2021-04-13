import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";

@Injectable({
          providedIn: 'root',
        })
export class ProfileService extends BaseApiService<any> {
constructor(http: HttpClient) {
          super(http, 'api/authentication/Seller/Login');
}
}
