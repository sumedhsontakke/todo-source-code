import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs/Rx'
  /*
  Generated class for the HttpCallService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GlobalVariables {

  public passedData:any= new Subject();

  constructor(public http: Http) {
   // console.log('Hello HttpCallService Provider');
    this.passedData.subscribe(next => {
        console.log(next);
    });   
   //console.log(this.passedData);
   //this.passedData.next("data---------------");
  }

}