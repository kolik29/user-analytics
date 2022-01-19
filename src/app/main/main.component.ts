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
    series: [{
      value: number
      timestamp: number
    }]
  }]
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  userAnalytics: iUserAnalytic[] | null = null

  ngOnInit(): void {
    if (this.userAnalytics == null) {
      this.userAnalytics = [{
        id: 0,
        title: 'Пользоватлель 1',
        data: [{
          title: 'Показатель 1',
          border: {
            top: 80,
            bottom: 30
          },
          series: [{
            value: 1,
            timestamp: 10
          }]
        }]
      }]
    }
  }

}
