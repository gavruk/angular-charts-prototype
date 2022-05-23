import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { DevextremeComponent } from './devextreme/devextreme.component';
import { KendoComponent } from './kendo/kendo.component';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ngx-charts', component: NgxChartsComponent },
  { path: 'highcharts', component: HighchartsComponent },
  { path: 'devextreme', component: DevextremeComponent },
  { path: 'kendo', component: KendoComponent },
  { path: 'prototype', component: PrototypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
