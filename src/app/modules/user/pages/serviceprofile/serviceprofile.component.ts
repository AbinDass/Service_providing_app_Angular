import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { workerState } from '../../model/workerState';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-serviceprofile',
  templateUrl: './serviceprofile.component.html',
  styleUrls: ['./serviceprofile.component.css']
})
export class ServiceprofileComponent implements OnInit {

  
  location!: string;
  title!: string;
  allWorkers!:workerState[]
  showAddService: boolean = false;
  isAuth$ = this.store.select(tokenSelector)
constructor(private routes:ActivatedRoute, private service:NearbyservicesService, private store:Store){}
ngOnInit(): void {
  
  this.routes.paramMap.subscribe(param => {
   this.title =  param.get('servicename')!
   console.log(this.title)
 
  })

this.service.locationSubject$.subscribe((data) =>{ 
  console.log(data)
   this.location = data
   if(this.title)this.workerList(this.title)
  })
}
showLocation = true;



userid:string|null = window.localStorage.getItem('userid');
workerList(title:string){
  this.service.getServiceProfiles(title, this.userid ,this.location).subscribe((workers)=>{
    this.allWorkers = workers
    console.log(this.allWorkers, this.userid,this.location)
  })
}


// locationChoose(location:string){
//   this.showLocation = !this.showLocation;
//   this.location = location
//   this.workerList(this.title)
// }

goToprofile(workerId:string|null|undefined){
  
}
}
