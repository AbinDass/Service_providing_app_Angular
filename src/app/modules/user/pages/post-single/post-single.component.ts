import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/postType';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
})
export class PostSingleComponent implements OnInit {
  constructor(private post: PostService, private store: Store) {}
  showcomment: boolean = false;
  loginalert: boolean = false;
  isAuth$ = this.store.select(tokenSelector);
  postData!: Post[];
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);

  ngOnInit(): void {
    this.getAllPosts();
  }
  signInAlert() {
    this.loginalert = !this.loginalert;
  }
  getAllPosts() {
    this.post.getAllPosts().subscribe((data) => {
      this.postData = data;
    });
  }

  createlike(postId: string | undefined) {
    this.post
      .createLike(postId, this.userid)
      .subscribe((data: { liked?: boolean; unlike?: boolean }) => {
        let likeState = data.liked ? true : false;
        if (data) {
          if (this.userid && postId)
            this.addAndRemoveLike(this.userid, postId, likeState);
        }
      });
  }

  // updateLike(postId: string, like: boolean, userid: string) {}

  addAndRemoveLike(userid: string, postId: string, like: boolean) {
    if (this.postData) {
      this.postData = this.postData.map((data) => {
        if (data._id === postId) {
          if (like) {
            data.likedUsers.push(userid);
            data.isLiked = true;
          } else {
            if (typeof data.likedUsers.indexOf(userid) == 'number') {
              data.likedUsers.splice(data.likedUsers.indexOf(userid), 1);
              data.isLiked = false;
            }
          }
        }
        return data;
      });
    }
  }
}
