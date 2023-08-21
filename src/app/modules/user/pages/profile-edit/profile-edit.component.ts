import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userModel } from '../../model/userState';
import { toBase64 } from '../../helper/toBase64';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  @Output('editclose') profileEditorclose = new EventEmitter()
  editClose: boolean = false;
  userid = JSON.parse(window.localStorage.getItem('userid')!)
  image!: string
  formData: userModel = {
    firstname: '',
    secondname: '',
    email: '',
    phone: '',
    location:'',
    decleration: '',
    profilepicture:[]
  };

  constructor(private profile:ProfileService){}
  close(){
    this.profileEditorclose.emit()
  }
  async onFileChange(event:Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      let image = await toBase64(inputElement.files[0]);
      this.image = image;
    }
  }
  

  submitForm(form: boolean|null){
    if(!form) return
    this.profile.editProfile(this.formData, this.image,this.userid).subscribe(data => console.log(data,'edited one'))
    this.profileEditorclose.emit()
  }
}
