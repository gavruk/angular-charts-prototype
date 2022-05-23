import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

import { Service, UnitSoldNgx } from '../app.service';

@Component({
  selector: 'app-ngx-charts',
  providers: [Service],
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NgxChartsComponent implements OnInit {
  LegendPosition = LegendPosition;
  shape = shape;

  pieData: any[];

  view: [number, number] = [window.innerWidth, 400];

  curveBundle = shape.curveBundle.beta(1)

  series: UnitSoldNgx[];

  constructor(service: Service) {
    this.series = service.getUnitsSoldNgx();
    this.pieData = service.getUnitsSoldPieKendo().map((x) => ({
      name: x.id,
      value: x.value,
    }));
    this.labelFormatting = this.labelFormatting.bind(this);
  }

  ngOnInit(): void {
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth, 400];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  labelFormatting(label: any): string {
    console.log(this.pieData);
    const product = this.pieData?.find((x) => x.name === label);
    if (!product) {
      return label;
    }
    return `${label}: (${product.value})`;
  }
}
