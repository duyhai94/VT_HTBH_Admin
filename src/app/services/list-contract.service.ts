import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";

@Injectable({
          providedIn: 'root',
        })
export class ListContractService extends BaseApiService<any> {
constructor(http: HttpClient) {
          super(http, 'api/SalesManager/Admin/ListPolicy');
}
}
