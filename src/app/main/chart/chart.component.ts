import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface iSeries {
  data: number[]
  type: string
  name: string
  color?: string
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
  seriesData: number[] = [];
  series: iSeries[] | null = null;
  defaultOptions: any = {}
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  
  constructor() {
    let charts: number[][][] = [[[], []], [[], []], [[], []]];

    for (let  i = 0; i < 999; i++) {
      let r = Math.floor(0 + Math.random() * 101);

      if (r > 80)
        charts[0].push([i, r]);
      else if (r < 30)
        charts[2].push([i, r]);
      else
        charts[1].push([i, r]);
    }

    this.defaultOptions = {
      title: {
        text: ''
      },
      xAxis: {
        title: {
          text: ''
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
            pointFormat: 'Показатель 1: {point.x}'
          }
        }
      },
      series: [{
        name: 'Пользователь 1',
        color: 'rgba(255, 0, 0, 1)',
        data: charts[0],
        type: 'scatter',
        marker: {
          symbol: 'circle'
        }
      }, {
        name: 'Пользователь 1',
        data: charts[1],
        type: 'scatter',
        marker: {
          symbol: 'circle'
        }
      }, {
        name: 'Пользователь 1',
        color: 'rgba(255, 0, 0, 1)',
        data: charts[2],
        type: 'scatter',
        marker: {
          symbol: 'circle'
        }
      }]
    }

    this.chartOptions = this.defaultOptions;
  }

  ngOnInit(): void {
  }  
}
