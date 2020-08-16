import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuModule } from './eu/eu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
