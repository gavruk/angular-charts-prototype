import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { DevextremeComponent } from './devextreme/devextreme.component';
import { KendoComponent } from './kendo/kendo.component';

import 'hammerjs';
import { PrototypeComponent } from './prototype/prototype.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgxChartsComponent,
    HighchartsComponent,
    DevextremeComponent,
    KendoComponent,
    PrototypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    DxChartModule,
    DxPieChartModule,
    ChartsModule,
    ButtonsModule,
    InputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
