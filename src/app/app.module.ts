import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { CardClienteComponent } from './card-cliente/card-cliente.component';
import { LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt, 'it-IT')

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FattureComponent,
    CardClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
