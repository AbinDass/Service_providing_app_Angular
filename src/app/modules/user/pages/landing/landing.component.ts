import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NearbyservicesService } from '../../services/nearbyservices.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent  {
  showmodal: boolean = true;
  constructor(private service:NearbyservicesService){}
  district(district: string){
    this.service.locationSubject$.next(district)
    this.showmodal = !this.showmodal
  }
  close(){
    this.showmodal=!this.showmodal
  }
}
