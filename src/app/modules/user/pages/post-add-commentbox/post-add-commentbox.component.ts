import { Component,Input, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostCommentboxComponent } from '../post-commentbox/post-commentbox.component';

@Component({
  selector: 'app-post-add-commentbox',
  templateUrl: './post-add-commentbox.component.html',
  styleUrls: ['./post-add-commentbox.component.css']
})
export class PostAddCommentboxComponent {
  @Input('postId') postId!: string | undefined;
  @ViewChild(PostCommentboxComponent) pscmbxRef!:PostCommentboxComponent
  constructor(private post:PostService) {}
  comments:string = ''
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  submitComment(){
     this.post.createComment(this.comments, this.userid, this.postId).subscribe((data) => {
      this.pscmbxRef.getComments()
      if (data) this.comments = ' '
     })
  }
}
