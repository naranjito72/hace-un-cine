// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Routing*/
import { AppRoutingModule } from './app-routing.module';

/*Components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { FilterPipe } from './serch-bar/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SerchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavbarComponent, SerchBarComponent, FilterPipe]
})
export class AppModule { }
