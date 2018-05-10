import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MainAppPage } from '../pages/main-app/main-app';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';
import { CallNumber } from '@ionic-native/call-number';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MainAppPageModule } from '../pages/main-app/main-app.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignInPage,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MainAppPageModule,
    SignUpPageModule,
    NotificationsPageModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SignInPage,
    SignUpPage,
    MainAppPage,
    NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, CameraPreview, CallNumber, ScreenOrientation,HTTP,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
