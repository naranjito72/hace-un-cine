// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
/*Routing*/
import { AppRoutingModule } from './app-routing.module';

/*Components*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { SharedModule } from './shared/shared/shared.module';
import { SearchBarService } from '../app/serch-bar/services/search-bar.service'
//import { FilterPipe } from './serch-bar/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SerchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [SearchBarService],
  bootstrap: [AppComponent],
  exports: [NavbarComponent, SerchBarComponent]
})
export class AppModule { }
