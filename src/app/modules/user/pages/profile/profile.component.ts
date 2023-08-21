import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { myposts, myservice, profiledata } from '../../model/profileInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profiledata!: profiledata;
  sameUser: boolean = false;
  myservice!: myservice;
  myPost!: myposts[];
  editClose: boolean = false;

  constructor(
    private profile: ProfileService,
    private routes: ActivatedRoute
  ) {}
  userid!: string;
  ngOnInit(): void {
    this.routes.paramMap.subscribe((param) => {
      this.userid = param.get('userprofile')!;
      if (this.userid === JSON.parse(window.localStorage.getItem('userid')!))
        this.sameUser = true;
      this.getProfile();
      this.myService();
      this.myPosts();
    });
  }
  getProfile() {
    this.profile.getProfile(this.userid).subscribe((data) => {
      this.profiledata = data;
    });
  }
  myService() {
    this.profile
      .myService(this.userid)
      .subscribe((data) => (this.myservice = data));
  }

  deleteService() {
    const val = confirm('Really you want to delete this service');
    if (val)
      this.profile
        .deleteService(this.userid)
        .subscribe((data) => this.myService());
  }

  myPosts() {
    this.profile.myPosts(this.userid).subscribe((data) => {
      this.myPost = data.slice(0, 3);
    });
  }

  morePost() {
    this.profile.myPosts(this.userid).subscribe((data) => {
      this.myPost = data;
    });
  }
  deletePost(postId: string | undefined) {
    alert('Really you want to delete this post');
    this.profile.deletePost(postId).subscribe((data) => this.myPosts());
  }

  editclose() {
    this.getProfile();
    this.editClose = !this.editClose;
  }
}
