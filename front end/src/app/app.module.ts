import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule,} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AmbassadeursComponent } from './ambassadeurs/ambassadeurs.component';
import { AmbassadeurDashComponent } from './ambassadeur-dash/ambassadeur-dash.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';

import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DashbordItComponent } from './dashbord-it/dashbord-it.component';
import { AddAmbassadeurComponent } from './dashbord-it/add-ambassadeur/add-ambassadeur.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { StatfinanceComponent } from './dashbord-admin/statfinance/statfinance.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmbassadeursComponent,
    AmbassadeurDashComponent,
    DashbordAdminComponent,
    HeaderComponent,
    DashbordItComponent,
    AddAmbassadeurComponent,
    LoginComponent,
    FooterComponent,
    StatfinanceComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
