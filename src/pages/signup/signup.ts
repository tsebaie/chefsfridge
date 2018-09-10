import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';

declare var firebase ;
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as user ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(user :user){
    this.chefsFridge.SignUp(user.email ,user.password ,user.name, user.surname);
  }

}
