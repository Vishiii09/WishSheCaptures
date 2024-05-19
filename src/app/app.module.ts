import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PortraitComponent } from './portrait/portrait.component';
import { NatureComponent } from './nature/nature.component';
import { StreetComponent } from './street/street.component';
import { FoodComponent } from './food/food.component';
import { BlackWhiteComponent } from './black-white/black-white.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PortraitComponent,
    NatureComponent,
    StreetComponent,
    FoodComponent,
    BlackWhiteComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, RoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
