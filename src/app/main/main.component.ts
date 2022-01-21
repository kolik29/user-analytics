import { Component, OnInit } from '@angular/core';

interface iUserAnalytic {
  id: number
  title: string
  data: [{
    title: string
    border: {
      top: number
      bottom: number
    }
    series: number[][]
  }]
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() {
    for (var userIndex = 0; userIndex < 8; userIndex++) {
      let userAnalytic: any = {
        id: userIndex,
        title: 'Пользователь ' + (userIndex + 1),
        data: []
      }

      for (var indicatorIndex = 0; indicatorIndex < 12; indicatorIndex++) {
        let charts: number[][] = [];
      
        for (let i = 0; i < 10; i++) {
          let r = Math.floor(0 + Math.random() * 101);
          let t = Math.floor(1392760800000 + Math.random() * (1642669354000 - 1392760800000));
          
          charts.push([t, r]);
        }

        userAnalytic.data.push({
          title: 'Показатель ' + (indicatorIndex + 1),
          border: {
            top: 50 + Math.random() * 50,
            bottom: Math.random() * 50
          },
          series: charts
        });
      }

      this.userAnalytics.push(userAnalytic);
    }
  }

  userAnalytics: iUserAnalytic[] = [];

  ngOnInit(): void {
  }

}
