import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HighlightVisualArgs, SeriesHighlight } from '@progress/kendo-angular-charts';
import { Path } from '@progress/kendo-drawing';
import { ScaleType } from '@swimlane/ngx-charts';

const chartDefaultV4Colors: string[] = [
  "#2ef32e",
  "#f3e9e9",

  "#484848",
  "#a8a8a8",

  "#78d237",
  "#28b4c8",
  "#2d73f5",
  "#aa46be",
];

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrototypeComponent implements OnInit {
  public seriesColors: string[] = chartDefaultV4Colors;

  public chartArea = {
    width: 130,
    height: 130,
    margin: 0,
    padding: 0,
    opacity: 0,
  };

  pieData: any[];
  pieDataNgx: any[];
  lineData: any[];
  lineDataArray: any[];
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

  public seriesHighlight: SeriesHighlight = {
    visual: (e: HighlightVisualArgs) => {
      const a = e.rect.topLeft();
      const b = e.rect.topRight();
      const mid = [a.x + (b.x - a.x) / 2, a.y];
      const dX = 2;
      const dY = 5;

      const visual = Path.fromPoints(
        [[a.x - dX, a.y - dY], mid, [b.x + dX, b.y - dY]],
        {
          stroke: {
            width: 2,
            color: "#fff",
          },
        }
      );

      return visual;
    }
  };

  constructor() {
    this.pieData = [{
      id: '1',
      value: 95,
    }, {
      id: '2',
      value: 5,
    }];
    this.pieDataNgx = this.pieData.map((x) => ({
      name: x.id,
      value: x.value,
     }));
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
    this.lineDataArray = this.lineData.map((x) => x.value);
    this.lineDataSeries = [{
      name: 'Service orders',
      series: this.lineData.map((x) => ({ name: x.id, value: x.value }))
    }]
  }

  ngOnInit(): void {
  }

  @ViewChild('ngxLineChart') chart: any;

  ngAfterViewInit() {
    // this.showDots(this.chart);
  }


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

  showDots(chart: any) {
    let index = 0;
    const paths = chart.chartElement.nativeElement.getElementsByClassName(
        'line-series'
    );
    const color = chart.chartElement.nativeElement.getElementsByClassName(
        'line-highlight'
    );

    for (let path of paths) {
        const chrtColor = '#a8a8a8';
        //const chrtColor = color[index].getAttribute('ng-reflect-fill');
        const pathElement = path.getElementsByTagName('path')[0];
        const pathAttributes = {
            'marker-start': `url(#dot${index})`,
            'marker-mid': `url(#dot${index})`,
            'marker-end': `url(#dot${index})`
        };
        this.createMarker(chart, chrtColor, index);
        this.setAttributes(pathElement, pathAttributes);
        index += 1;
    }
  }

  ngxTooltipTextDevices(c: any): string {
    return `${c.data.value} devices`;
  }

  ngxTooltipTextOrders(c: any): string {
    return `${c.data.value} orders`;
  }

  /**
   * create marker
   *
   */

  createMarker(chart: any, color: any, index: any) {
      const svg = chart.chartElement.nativeElement.getElementsByTagName('svg');
      var marker = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'marker'
      );
      var circle = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle'
      );
      svg[0].getElementsByTagName('defs')[0].append(marker);
      marker.append(circle);
      const m = svg[0].getElementsByTagName('marker')[0];
      const c = svg[0].getElementsByTagName('circle')[0];

      const markerAttributes = {
          id: `dot${index}`,
          viewBox: '0 0 10 10',
          refX: 5,
          refY: 5,
          markerWidth: 4,
          markerHeight: 4
      };

      const circleAttributes = {
          cx: 5,
          cy: 5,
          r: 5,
          fill: color
      };
      m.append(circle);

      this.setAttributes(m, markerAttributes);
      this.setAttributes(c, circleAttributes);
  }

  /**
   * set multiple attributes
   */
  setAttributes(element: any, attributes: any) {
      for (const key in attributes) {
          element.setAttribute(key, attributes[key]);
      }
  }
}
