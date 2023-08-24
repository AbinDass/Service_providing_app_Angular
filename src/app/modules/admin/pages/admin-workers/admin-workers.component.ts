import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { workers } from '../../model/workerTypes';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './admin-workers.component.html',
  styleUrls: ['./admin-workers.component.css'],
})
export class AdminWorkersComponent implements OnInit {
  workers!: workers[];
  showImg: boolean = false;
  private ngUnsubscribe = new Subject<void>();

  currentWorker!: workers;
  ngOnInit(): void {
    this.getWorkerList();
  }
  constructor(private adminService: AdminService) {}
  setWorkerProof(worker: workers) {
    this.showImg = !this.showImg;
    this.currentWorker = worker;
  }

  getWorkerList() {
    this.adminService
      .workerList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.workers = data;
      });
  }

  approveWorker(workerid: string | undefined, button: string) {
    this.adminService
      .approveWorker(workerid, button)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.getWorkerList();
        this.showImg = !this.showImg;
      });
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
