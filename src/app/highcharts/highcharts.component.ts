import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import stockData from './stockData';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }],
  };
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false

  stockChart = {
    hcOptions: {
      title: { text: 'Stock chart' },
      subtitle: { text: '1st data set' },
      plotOptions: {
        series: {
           pointStart: Date.now(),
           pointInterval: 86400000 // 1 day
        }
      },
      series: [{
        type: 'line',
        data: [11, 2, 3],
        threshold: 5,
        negativeColor: 'red',
        events: {
          dblclick: function () {
            console.log('dblclick - thanks to the Custom Events plugin');
          }
        }
      }, {
        type: 'candlestick',

        data: [
          [0, 15, -6, 7],
          [7, 12, -1, 3],
          [3, 10, -3, 3]
        ]
      }]
    } as Highcharts.Options,
    hcCallback: (chart: Highcharts.Chart) => {
      console.log('some variables: ', Highcharts, chart, this.stockChart);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
