import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { workerState } from '../../model/workerState';
import { ControlpanelService } from '../../services/controlpanel.service';

@Component({
  selector: 'app-service-hiring',
  templateUrl: './service-hiring.component.html',
  styleUrls: ['./service-hiring.component.css']
})
export class ServiceHiringComponent {
  @Input() worker!:workerState
  @Output('closeHire') closeHire = new EventEmitter()
  isAuth$ = this.store.select(tokenSelector);
  userid:string = JSON.parse(window.localStorage.getItem('userid')!);
constructor(private store: Store,private controlpanel:ControlpanelService){}
  appointData = {
    date:'',
    time:'',
    declaration:'',
  }

  Close(){
    this.closeHire.emit()
  }


  makeAppointment(){
    this.controlpanel.makeAppointment(this.worker.user._id,this.userid,this.appointData.date,this.appointData.time,this.appointData.declaration).subscribe(data =>{
    })
  }
}
