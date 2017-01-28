import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the AlertUtility provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertUtility {

  constructor(public http: Http, public alertCtrl: AlertController) {
  }

  alertMessage(title: string, message: string, button: string) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: [button]
    });
    alert.present();
    return false;
   }
}
