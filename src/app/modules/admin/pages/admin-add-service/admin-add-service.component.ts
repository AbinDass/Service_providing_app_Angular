import { Component , EventEmitter, Output} from '@angular/core';
import { toBase64 } from '../../helper/toBase64';
import { AdminService } from '../../services/admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-add-service',
  templateUrl: './admin-add-service.component.html',
  styleUrls: ['./admin-add-service.component.css'],
})
export class AdminAddServiceComponent {
  private ngUnsubscribe = new Subject<void>();
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
      const img =  await toBase64(inputImg.files[0])
      this.iamgeurl = img as string;
    }
  } 
  async handleLogo(event: Event) {
    let inputImg = event.target as HTMLInputElement;
    if (inputImg.files && inputImg.files.length > 0) {
      this.logourl = await toBase64(inputImg.files[0]) as string;
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
    ).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => this.toggleEmit.emit())
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
