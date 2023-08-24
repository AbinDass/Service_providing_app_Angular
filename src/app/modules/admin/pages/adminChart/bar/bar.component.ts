// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bar',
//   templateUrl: './bar.component.html',
//   styleUrls: ['./bar.component.css']
// })
// export class BarComponent {

// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { Subject, map, takeUntil } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip | undefined;
};

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: any;
  private ngUnsubscribe = new Subject<void>();
  constructor(private adminService: AdminService) {}
  // constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.getUserdata();
    this.chartOptions = {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [],
        },
        // {
        //   name: "Social Media",
        //   type: "line",
        //   data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        // }
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: 'Traffic Sources',
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
        '09 Jan 2001',
        '10 Jan 2001',
        '11 Jan 2001',
        '12 Jan 2001',
      ],
      xaxis: {
        type: 'category',
      },
      yaxis: [
        {
          title: {
            text: 'Website Blog',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Social Media',
          },
        },
      ],
    };
  }
  getUserdata() {
    this.adminService
      .getUserdata()
      .pipe(
        map((data) => {
          let month = [];
          let count = [];
          for (let item of data as Array<any>) {
            month.push(item.month);
            count.push(item.count);
          }
          return { month, count };
        })
      )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.chartOptions.series[0].data = data.count;
        this.chartOptions.labels = data.month;
      });
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
