import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { userData, usersList } from '../../model/usersType';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  list!: userData[];
  private ngUnsubscribe = new Subject<void>();

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.adminService
      .getUserList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => (this.list = data.userdata));
  }
  userBlock(id: string | undefined) {
    this.adminService
      .blockUser(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => this.getUsers());
  }
  userUnblock(id: string | undefined) {
    this.adminService
      .unblockUser(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => this.getUsers());
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
