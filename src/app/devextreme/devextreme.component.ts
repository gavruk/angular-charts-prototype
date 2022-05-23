import { Component, OnInit } from '@angular/core';

import { Service, IKeyValue, UnitSoldExtreme } from '../app.service';

@Component({
  selector: 'app-devextreme',
  providers: [Service],
  templateUrl: './devextreme.component.html',
  styleUrls: ['./devextreme.component.scss']
})
export class DevextremeComponent implements OnInit {
  products: UnitSoldExtreme[];
  productTypes: IKeyValue[];
  months: string[];
  pieData: any[];

  constructor(service: Service) {
    this.products = service.getUnitsSoldExtreme();
    this.months = service.getUnitsMonths();
    this.productTypes = service.getProductTypes();
    this.pieData = service.getUnitsSoldPieKendo();
  }

  ngOnInit(): void {
  }

  onLegendClick(e: any) {
    if (e.component.NAME === 'dxPieChart') {
      if (e.points[0].isVisible()) {
        e.points[0].hide();
      } else {
        e.points[0].show();
      }
      return;
    }
    const series = e.target;
    if (series.isVisible()) {
      series.hide();
    } else {
      series.show();
    }
  }

  customizeLabel(arg: any) {
    return `${arg.argumentText} (${arg.percentText})`;
  }
}
