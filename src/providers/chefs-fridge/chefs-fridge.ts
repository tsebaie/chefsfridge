import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../interfaces/user';
import { ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
declare var firebase;
/*
  Generated class for the ChefsFridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChefsFridgeProvider {

  user = {} as user ;
  url;
  constructor(public http: HttpClient, public toastCtrl: ToastController,   public imagePicker: ImagePicker, public cropService: Crop,) {
    console.log('Hello ChefsFridgeProvider Provider');
  }

  // uploadDefaultImg(){
  //   return new Promise((reject, resolve) =>{
  //     firebase.storage().ref().child('default profile.png').getDownloadURL().then((url)=>{
  //       var test = url;
  //         alert(url);
  //     })
  //   })
  // }

  SignUp(email ,password ,name ,surname){
    return new Promise((reject, resolve) => {
      //Create a user account with the email and password
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        //add the default image for the user profile
        firebase.storage().ref().child('default profile.png').getDownloadURL().then((url)=>{
          this.url = url;
            alert(url);
        })
        //signing the user in
        firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
          var uid = firebase.auth().currentUser.uid;
          //setting user info in the database
          firebase.database().ref('users/'+uid+'/details').set({
            name: name,
            surname: surname,
            email:email,
            image: this.url
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

  // uploadImage(imageURI){
  //   return new Promise<any>((resolve, reject) => {
  //     let storageRef = firebase.storage().ref();
  //     let imageRef = storageRef.child('image').child('imageName');
  //     this.encodeImageUri(imageURI, function(image64){
  //       imageRef.putString(image64, 'data_url')
  //       .then(snapshot => {
  //         resolve(snapshot.downloadURL)
  //       }, err => {
  //         reject(err);
  //       })
  //     })
  //   })
  // }

  // encodeImageUri(imageUri, callback) {
  //   var c = document.createElement('canvas');
  //   var ctx = c.getContext("2d");
  //   var img = new Image();
  //   img.onload = function () {
  //     var aux:any = this;
  //     c.width = aux.width;
  //     c.height = aux.height;
  //     ctx.drawImage(img, 0, 0);
  //     var dataURL = c.toDataURL("image/jpeg");
  //     callback(dataURL);
  //   };
  //   img.src = imageUri;
  // };

  // openImagePicker(){
  //   this.imagePicker.hasReadPermission().then(
  //     (result) => {
  //       if(result == false){
  //         // no callbacks required as this opens a popup which returns async
  //         this.imagePicker.requestReadPermission();
  //       }
  //       else if(result == true){
  //         this.imagePicker.getPictures({
  //           maximumImagesCount: 1
  //         }).then(
  //           (results) => {
  //             for (var i = 0; i < results.length; i++) {
  //               this.uploadImageToFirebase(results[i]);
  //             }
  //           }, (err) => console.log(err)
  //         );
  //       }
  //     }, (err) => {
  //       console.log(err);
  //     });
    

}
