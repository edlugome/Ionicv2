import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FirstPage} from '../pages/first/first';
import { HttpModule } from '@angular/http';
import { RegisterPage } from '../pages/register/register';
import { Home2Page } from '../pages/home2/home2';
import {ProyectosPage} from '../pages/proyectos/proyectos';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage';
const config: SocketIoConfig = { url: 'http://192.168.250.15:3001', options: {} };
=======
const config: SocketIoConfig = { url: 'http://192.168.250.30:3001', options: {} };
>>>>>>> 5462da9f1fc19c78bb2a62c4a543dc8720a6dedb

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    RegisterPage,
    Home2Page,
    ProyectosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    RegisterPage,
    Home2Page,
    ProyectosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

