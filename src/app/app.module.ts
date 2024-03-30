import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import  {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

//PrimeNg
import {CardModule} from "primeng/card"
import {InputTextModule} from "primeng/inputtext"
import {ButtonModule} from "primeng/button"
import {ToastModule} from "primeng/toast"

//Rotas
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //PrimeNg
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
