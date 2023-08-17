import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommntState } from '../../model/postType';

@Component({
  selector: 'app-post-commentbox',
  templateUrl: './post-commentbox.component.html',
  styleUrls: ['./post-commentbox.component.css']
})
export class PostCommentboxComponent implements OnInit{
@Input('postId') postId: string|undefined;
comments!:CommntState
constructor(private post:PostService){}
ngOnInit(): void {
  this.getComments()
}
getComments(){
  this.post.getAllComments(this.postId).subscribe((data) =>{
    this.comments = data
    console.log(this.comments)
  })
}

}
