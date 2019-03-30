import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',component:LoginComponentComponent
      },
      {
        path:'registration',component:RegistrationComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
