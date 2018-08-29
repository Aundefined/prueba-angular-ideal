import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LlamadaService } from "./services/llamada.service";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { appRouting } from './app.routing';
import { AuthGuard } from './auth-guard';


import { AppComponent } from './app.component';
import { CalcularComponent } from './calcular/calcular.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SaludarComponent } from './saludar/saludar.component';
import { TablaComponent } from './tabla/tabla.component';
import { DragComponent } from './drag/drag.component';

import {DataTableModule} from "angular2-datatable";
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    CalcularComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SaludarComponent,
    TablaComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouting,
    DataTableModule,
    DragulaModule.forRoot()

  ],
  providers: [
    LlamadaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
