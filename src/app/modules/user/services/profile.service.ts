import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myposts, myservice, profiledata } from '../model/profileInterface';
import { userModel } from '../model/userState';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseurl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProfile(userid: string | null) {
    return this.http.get<profiledata>(
      this.baseurl + `/getprofile?userid=${userid}`
    );
  }

  myService(userId: string | null) {
    return this.http.get<myservice>(this.baseurl + `/myservice/${userId}`);
  }

  deleteService(userId: string | null) {
    return this.http.delete(this.baseurl + `/deleteMyservice?id=${userId}`);
  }

  myPosts(userId: string | null) {
    return this.http.get<myposts[]>(
      this.baseurl + `/myposts/?userId=${userId}`
    );
  }
  deletePost(postId: string | undefined) {
    return this.http.delete(this.baseurl + `/posts?postid=${postId}`);
  }
  
  editProfile(userdata:userModel, imageurl:string, userId:string | null) {
   return this.http.post(this.baseurl + '/editprofile',{userdata,imageurl,userId});
  }
}
