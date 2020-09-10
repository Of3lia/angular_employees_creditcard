import { Injectable } from '@angular/core';

import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  readonly rootURL = 'https://webapicreditcardcodaffectiontutorial20200908102754.azurewebsites.net/';
  public list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(){
    return this.http.post(this.rootURL, this.formData);
  }
  
  putPaymentDetail(){
  return this.http.put(this.rootURL + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id){
  return this.http.delete(this.rootURL + id);
  }

  refreshList(){
    this.http.get(this.rootURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
