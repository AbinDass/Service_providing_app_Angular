import { Component } from '@angular/core';
import { toBase64 } from '../../helper/toBase64';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
postimg!:File|null;
caption!:string;
userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);

  constructor(private post:PostService){}

 async handleImage(event: Event) {
   let inputImg = event.target as HTMLInputElement;
   if(inputImg.files && inputImg.files.length > 0){
     this.postimg = await toBase64(inputImg.files[0])
   }
  }

  submitPost(){
    this.post.createPost(this.postimg,this.caption,this.userid).subscribe((data)=> console.log(data,"dataaaaaaaaaaa"))
  }
}
