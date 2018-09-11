import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
declare var firebase ;
import {ProfilePage} from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as user ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {}

  signUp(user :user){
    this.chefsFridge.SignUp(user.email ,user.password ,user.name, user.surname);
    this.navCtrl.push(ProfilePage);
  }

}
