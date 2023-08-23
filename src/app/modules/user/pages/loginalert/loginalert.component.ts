import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginalert',
  templateUrl: './loginalert.component.html',
  styleUrls: ['./loginalert.component.css']
})
export class LoginalertComponent implements OnInit {
  @Input() loginAlert!:boolean
  constructor(private router: Router){}
  ngOnInit(): void {
  
  }
  Login(){
    this.router.navigate(['signin']);
  }
  close(){
    // this.loginEmitter.emit()
    this.router.navigate(['/nearbyservices']);

  }
}
