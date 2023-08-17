import { Injectable, } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CommntState, Post } from '../model/postType';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseurl: string = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }

getAllPosts(){
 return this.http.get<Post[]>(this.baseurl+'/posts')
}

getAllComments(postId:string|undefined){
 return this.http.get<CommntState>(this.baseurl+`/posts/getComments/${postId}`)
}

createPost(imageurl:File|null, post:string, id:string|null){
 return this.http.post(this.baseurl+'/createpost', {imageurl, post, id})
}

createComment(comment:string,userId:string|null,postId:string|undefined){
  console.log(userId)
  return this.http.post(this.baseurl+`/addcomment/${postId}`,{comment,userId,postId})
}

createLike(postId:string|undefined, userId:string|null):Observable<{liked?:boolean,unlike?:boolean}>{
 return this.http.patch<{liked?:boolean,unlike?:boolean}>(this.baseurl+'/likepost', {postId, userId})
}
}
