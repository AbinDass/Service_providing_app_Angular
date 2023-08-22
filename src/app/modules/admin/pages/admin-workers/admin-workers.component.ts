import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { workers } from '../../model/workerTypes';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './admin-workers.component.html',
  styleUrls: ['./admin-workers.component.css']
})
export class AdminWorkersComponent implements OnInit {
  workers!:workers[]
  showImg:boolean = false;
  currentWorker!:workers
  ngOnInit(): void {
    this.getWorkerList();
  }
  constructor(private adminService:AdminService){}
  setWorkerProof(worker:workers){
    this.showImg = !this.showImg
    this.currentWorker = worker
  }

  getWorkerList(){
    this.adminService.workerList().subscribe(data => {
      this.workers = data
      console.log(data,'workerlist')
    })
  }

  approveWorker(workerid:string|undefined,button:string){
    this.adminService.approveWorker(workerid,button).subscribe(data => {
      this.getWorkerList()
      this.showImg = !this.showImg
    })
  }
}
