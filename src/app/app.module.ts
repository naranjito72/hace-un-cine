import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListapelisComponent } from './listapelis/listapelis.component';

@NgModule({
  declarations: [
    AppComponent,
    ListapelisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListapelisComponent]
})
export class AppModule { }
