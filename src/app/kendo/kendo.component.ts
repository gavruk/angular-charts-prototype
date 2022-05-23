import { Component, OnInit } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';

import { Service, Product } from '../app.service';

@Component({
  selector: 'app-kendo',
  providers: [Service],
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.scss']
})
export class KendoComponent implements OnInit {
  products: Product[];
  pieData: any[];
  months: string[];

  constructor(service: Service) {
    this.products = service.getUnitsSoldKendo();
    this.pieData = service.getUnitsSoldPieKendo();
    this.months = service.getUnitsMonths();
  }

  ngOnInit(): void {
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.id}: ${args.dataItem.value}`;
  }
}
