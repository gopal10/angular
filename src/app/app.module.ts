import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HttpClientModule }    from '@angular/common/http';
import { FoodieService } from "./foodie.service";
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavouriteComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  FormsModule,
    AppRoutingModule
  ],
  providers: [FoodieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
