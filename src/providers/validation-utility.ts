import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ValidationUtility provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ValidationUtility {

  constructor(public http: Http) {
  }

  isValidName(firstName:string): boolean {
    var NAME_REGEXP =/^[a-zA-Z][a-zA-Z0-9 ]*[._-]?[a-zA-Z0-9]+$/;
    if (!NAME_REGEXP.test(firstName) || firstName == null) {
        return false;
    }
    return true;
   }
}
