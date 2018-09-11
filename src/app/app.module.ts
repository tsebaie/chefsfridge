import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ChefsFridgeProvider } from '../providers/chefs-fridge/chefs-fridge';
import { HttpClientModule } from '@angular/common/http';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AdminPage } from '../pages/admin/admin';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    AdminPage
  ],
  imports: [
    BrowserModule,HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChefsFridgeProvider
  ]
})
export class AppModule {}
