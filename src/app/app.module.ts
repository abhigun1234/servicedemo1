import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ContactusComponent} from './contactus/contactus.component'
import{AboutusComponent} from './aboutus/aboutus.component'
import {HomeComponent} from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'abo1utus',
    component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
  ,{path:'home',component:HomeComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
