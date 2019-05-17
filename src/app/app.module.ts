import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientsComponent } from './clients/clients.component';
import { ItemClientComponent } from './clients/item-client/item-client.component';

import {
  MatCardModule, 
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ItemClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
