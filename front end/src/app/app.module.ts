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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmbassadeursComponent,
    AmbassadeurDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
