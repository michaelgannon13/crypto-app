import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinSelectComponent } from './components/coin-select/coin-select.component';
import { DateSelectComponent } from './components/date-select/date-select.component';
import { QuantitySelectComponent } from './components/quantity-select/quantity-select.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { ResultsPanelComponent } from './components/results-panel/results-panel.component';
import { ConfettiComponent } from './confetti/confetti.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinSelectComponent,
    DateSelectComponent,
    QuantitySelectComponent,
    CurrencySelectComponent,
    ResultsPanelComponent,
    ConfettiComponent
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
