import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../interfaces/user';
import { ToastController } from 'ionic-angular';
declare var firebase;
/*
  Generated class for the ChefsFridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChefsFridgeProvider {

  user = {} as user ;


  constructor(public http: HttpClient, public toastCtrl: ToastController) {
    console.log('Hello ChefsFridgeProvider Provider');
  }

  SignUp(email ,password ,name ,surname){
    return new Promise((reject, resolve) => {
      //Create a user account with the email and password
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
          var uid = firebase.auth().currentUser.uid;
          firebase.database().ref('users/'+uid+'/details').set({
            name: name,
            surname: surname,
            email:email
          })
        }, (error)=>{
          alert(error);
        })
      }, (error)=>{
        const toast = this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        toast.present();
      })
   

    });
  }

}
