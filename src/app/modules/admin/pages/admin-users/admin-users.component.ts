import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { userData, usersList } from '../../model/usersType';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  list!:userData[]

  constructor(private adminService:AdminService){}
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.adminService.getUserList().subscribe(data => this.list = data.userdata)
  }
  userBlock(id:string|undefined){
    this.adminService.blockUser(id).subscribe(data => this.getUsers())
  }
  userUnblock(id:string|undefined){
    this.adminService.unblockUser(id).subscribe(data => this.getUsers())
  } 
}
