import { Component, Output, EventEmitter ,ViewChild ,ElementRef} from '@angular/core';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { location, locations, search_location } from '../../model/locationType';

@Component({
  selector: 'app-mapboxinput',
  templateUrl: './mapboxinput.component.html',
  styleUrls: ['./mapboxinput.component.css']
})

export class MapboxinputComponent {
  searchTerm: string = '';
  locations!: locations[];
  searchedItems!:search_location

  @Output() selected_Location = new EventEmitter();
  @ViewChild('location') locationRef !: ElementRef; 
  constructor(private service:NearbyservicesService){}
  chageText(event:KeyboardEvent){
    this.service.mapboxLocation((event.target as HTMLInputElement).value).subscribe((data:{features: locations[]}) => {
      this.locations = data.features;
    })
  }

  selectedLocation(result:location){
    this.locationRef.nativeElement.value = result.text
    let location = result.text
    let district = null;
    let state = null;
    for (const x of result.context) {
      if (x.id.includes("district")){  district = x.text;}
      if (x.id.includes("region")) { state = x.text;}
  }

    this.searchedItems = {
      location,
      district,
      state
    }

    this.selected_Location.emit(this.searchedItems)
    this.locations = []
  }
}
