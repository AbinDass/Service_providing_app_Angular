import { Component , EventEmitter, Output} from '@angular/core';
import { toBase64 } from '../../helper/toBase64';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-add-service',
  templateUrl: './admin-add-service.component.html',
  styleUrls: ['./admin-add-service.component.css'],
})
export class AdminAddServiceComponent {
  @Output('toggle') toggleEmit = new EventEmitter()
  constructor(private adminService: AdminService) {}
  formData = {
    service: '',
    description: '',
  };
  iamgeurl!: string;
  logourl!: string;
  async handleImage(event: Event) {
    let inputImg = event.target as HTMLInputElement;
    if (inputImg.files && inputImg.files.length > 0) {
      this.iamgeurl = await toBase64(inputImg.files[0]);
    }
  }
  async handleLogo(event: Event) {
    let inputImg = event.target as HTMLInputElement;
    if (inputImg.files && inputImg.files.length > 0) {
      this.logourl = await toBase64(inputImg.files[0]);
    }
  }
  submitFofrm() {
    console.log(
      this.iamgeurl,
      this.logourl,
      this.formData.service,
      this.formData.description
    );
    this.adminService.addService(
      this.formData.service,
      this.iamgeurl,
      this.logourl,
      this.formData.description
    ).subscribe(data => this.toggleEmit.emit())
  }
}
