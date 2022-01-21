import { Component, Input, OnInit } from '@angular/core';

import * as Highcharts from "highcharts/highstock";

declare var require: any;
let HIndicatorsAll = require('highcharts/indicators/indicators-all');
let HDragPanes = require('highcharts/modules/drag-panes');
let HAnnotationsAdvanced = require('highcharts/modules/annotations-advanced');
let HPriceIndicator = require('highcharts/modules/price-indicator');
let HFullScreen = require('highcharts/modules/full-screen');
let HStockTools = require('highcharts/modules/stock-tools');

HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
  highchartsDetail: typeof Highcharts = Highcharts;
  chartOptionsDetail: Highcharts.Options;
  updateFlag: boolean = false;
  
  @Input() userAnalytics: any;
  
  constructor() {
  }
  
  ngOnInit(): void {
    const self = this;

    let _chartOptionsDetail: Highcharts.Options = {
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function(obj) {
            return Highcharts.dateFormat('%d.%m.%Y', Number(obj.value));
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        scatter: {
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Значение: {point.y}'
          }
        }
      },
      navigator: {
        series: {
          type: 'scatter',
          lineWidth: 0,
        }
      },
      rangeSelector: {
        selected: 1,
      },
      series: []
    }

    this.userAnalytics.forEach(userAnalytic => {
      userAnalytic.data.forEach(data => {
        _chartOptionsDetail.series?.push({
          name: userAnalytic.title + ' | ' + data.title,
          zones: [
            {
              value: data.border.bottom,
              color: '#ff0000'
            },
            {
              value: data.border.top
            },
            {
              color: '#ff0000'
            }
          ],
          data: data.series,
          type: 'scatter',
          marker: {
            symbol: 'circle'
          }
        });
      });
    });
    
    this.chartOptionsDetail = _chartOptionsDetail;
  }
}
