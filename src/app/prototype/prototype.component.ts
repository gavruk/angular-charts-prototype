import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrototypeComponent implements OnInit {
  constructor() {
    // data for DevExpress and Kendo UI pie
    this.pieData = [{
      id: '1',
      value: 95,
    }, {
      id: '2',
      value: 5,
    }];

    // data for DevExpress line
    this.lineData = [{
      id: 'Order 1',
      value: 9
    }, {
      id: 'Order 2',
      value: 3
    }, {
      id: 'Order 3',
      value: 14
    }, {
      id: 'Order 4',
      value: 10
    }, {
      id: 'Order 5',
      value: 18
    }];

    // data for KendoUI line
    this.lineDataArray = this.lineData.map((x) => x.value);

    // data for ngx-charts pie
    this.pieDataNgx = this.pieData.map((x) => ({
      name: x.id,
      value: x.value,
     }));

    // data for ngx-charts line
    this.lineDataSeries = [{
      name: 'Service orders',
      series: this.lineData.map((x) => ({ name: x.id, value: x.value }))
    }]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  // DevExpress START
  pieData: any[];
  lineData: any[];
  customizePoint(e: any): object {
    if (e.argument === '1') {
      return {
        color: '#2ef32e',
      };
    }
    return {
      color: '#f3e9e9',
    };
  }

  // DevExpress END

  // KendoUI START
  public seriesColors: string[] = [
    "#2ef32e",
    "#f3e9e9",
  ];
  public chartArea = {
    width: 130,
    height: 130,
    margin: 0,
    padding: 0,
    opacity: 0,
  };
  lineDataArray: any[];
  // KendoUI END

  // ngx-charts START
  @ViewChild('ngxLineChart') chart: any;
  pieDataNgx: any[];
  lineDataSeries: any[];
  scheme = {
    name: 'latch',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      "#2ef32e",
      "#f3e9e9",
      "#484848",
      '#2196f3',
      '#00b862',
      '#afdf0a',
      '#a7b61a',
      '#f3e562',
      '#ff9800',
      '#ff5722',
      '#ff4514'
    ],
  };
  ngxTooltipTextDevices(c: any): string {
    return `${c.data.value} devices`;
  }
  // ngx-charts END
}
