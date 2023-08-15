import { Component , OnInit} from '@angular/core';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { availableService } from '../../model/serviceState';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  allServices!:availableService;

constructor(private services:NearbyservicesService){}
ngOnInit(): void {
  this.getAvailableServices();
}

getAvailableServices(){
this.services.getNearByServices().subscribe((data) => this.allServices = data)
}
}
