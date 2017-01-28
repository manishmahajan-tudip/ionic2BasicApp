import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';
import { ValidationUtility } from '../../providers/validation-utility';
import { AlertUtility } from '../../providers/alert-utility';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService, ValidationUtility, AlertUtility]  
})
export class LoginPage {

  username:string;
  password:string;
 
  constructor(private navCtrl: NavController,private navParams: NavParams,private authService: AuthService,private validationUtility: ValidationUtility,private alertUtitlity: AlertUtility) {}

  ionViewDidLoad() {
  }

  login() {
    if(this.username == null || this.password == null) {
      this.alertUtitlity.alertMessage("Error!","All fields are required","Ok");
    } else {
      if(this.validationUtility.isValidName(this.username)) {
        if (this.authService.loginService(this.username, this.password)) {
          this.navCtrl.setRoot(TabsPage);
        } else {
          this.alertUtitlity.alertMessage("Error!","Enter valid username and password","Ok");
        }
      } else {
        this.alertUtitlity.alertMessage("Error!","Enter valid user name","Ok");
      } 
    }
  }
}
