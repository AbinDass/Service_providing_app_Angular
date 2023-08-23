// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bar',
//   templateUrl: './bar.component.html',
//   styleUrls: ['./bar.component.css']
// })
// export class BarComponent {

// }

import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
@Component({
     selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  source: any = {
    datatype: 'array', // Change the datatype to 'array' for custom data
    datafields: [
        { name: 'Country' },
        { name: 'GDP' },
        { name: 'DebtPercent' },
        { name: 'Debt' }
    ],
    localdata: [  // Replace this array with your own data
        { Country: 'Country A', GDP: 10000, DebtPercent: 50, Debt: 5000 },
        { Country: 'Country B', GDP: 15000, DebtPercent: 30, Debt: 4500 },
        // Add more data entries as needed
    ]
};
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
    xAxis: any =
    {
        dataField: 'Country',
        gridLines: { visible: true },
        valuesOnTicks: false
    };
    seriesGroups: any[] =
    [
        {
            type: 'column',
            valueAxis:
            {
                visible: true,
                unitInterval: 5000,
                title: { text: 'GDP & Debt per Capita($)<br>' }
            },
            series: [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' }
            ]
        },
        {
            type: 'line',
            valueAxis:
            {
                visible: true,
                position: 'right',
                unitInterval: 10,
                title: { text: 'Debt (% of GDP)' },
                gridLines: { visible: false },
                labels: { horizontalAlignment: 'left' }
            },
            series: [
                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
            ]
        }
    ];


    constructor(private adminService:AdminService){}

    getUserdata(){
      this.adminService.getUserdata().subscribe(data => console.log(data))
    }
}
