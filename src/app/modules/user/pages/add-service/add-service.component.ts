import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import {
  addService,
  availableService,
  services,
} from '../../model/serviceState';
import { search_location } from '../../model/locationType';
import { toBase64 } from '../../helper/toBase64.js';
import { SubscriptionService } from '../../services/subscription.service';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  availableServices: services[] = [];
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  @Input() serviceExist!:boolean
  @Input() subscibeExist!:boolean
  @Output('postEmit') postEmit = new EventEmitter()
  location!: search_location;
  image!: File | null;
  constructor(private service: NearbyservicesService, private subscribe:SubscriptionService) {}
 
  formData: addService = {
    servicetitle: '',
    labour: '',
    description: '',
    liesence: null,
    id: this.userid,
  };

  ngOnInit(): void {
    this.getNearByServices();
  }

  getNearByServices() {
    this.service.getServices(this.userid).subscribe((data) => {
      this.availableServices = data.services;
    });
  }
  submitForm(form: boolean|null) {
    if(!form) return
    let allservice = { ...this.formData, ...this.location };
    this.postEmit.emit()
    this.service.addService(allservice).subscribe((data) => {
    if(data)  alert(`your proof want to varify , it will be update`)
    });

  }
  async onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      let image = await toBase64(inputElement.files[0]);
      this.formData.liesence = image;
    }
  }
  handleLocation(selectedLocation: search_location) {
    this.location = selectedLocation;
  }


  laboor = {
    inputId: 'labour',
    inputType: 'text',
    labelName: 'add labour',
    inputPlaceHolder: '0000',
  };
  phone = {
    inputId: 'phone',
    inputType: 'number',
    labelName: 'add phone',
    inputPlaceHolder: '0000',
  };
  proof = {
    inputId: 'proof',
    inputType: 'file',
    labelName: 'add proof',
    inputPlaceHolder: 'xyz.jpg',
  };
}
