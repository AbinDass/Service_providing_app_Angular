import { Component, OnInit, Output,Input, EventEmitter} from '@angular/core';
import { NearbyservicesService } from '../../services/nearbyservices.service';

@Component({
  selector: 'app-chooselocation',
  templateUrl: './chooselocation.component.html',
  styleUrls: ['./chooselocation.component.css']
})
export class ChooselocationComponent implements OnInit {
  @Output('district') distEmiter = new EventEmitter<string>();
  @Output('closeLocation') locationCloseEmiter = new EventEmitter();
  constructor(private service:NearbyservicesService){}


  allLocations!:string[]
  ngOnInit(): void {
    this.getAllLocation()
  }
  getAllLocation(){
    this.service.getAlldistricts().subscribe((data) => this.allLocations = data)
  }

  selectDistrict(dist:string){
    this.distEmiter.emit(dist);
    this.service.locationSubject$.next(dist)
  }

  close(){
    this.locationCloseEmiter.emit()
  }
}
