import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs  from '@angular/common/locales/es';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


registerLocaleData(localeEs);

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
