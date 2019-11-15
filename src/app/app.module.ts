import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinSelectComponent } from './coin-select/coin-select.component';
import { DateSelectComponent } from './date-select/date-select.component';
import { QuantitySelectComponent } from './quantity-select/quantity-select.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinSelectComponent,
    DateSelectComponent,
    QuantitySelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
