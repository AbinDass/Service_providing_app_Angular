import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginalert',
  templateUrl: './loginalert.component.html',
  styleUrls: ['./loginalert.component.css']
})
export class LoginalertComponent implements OnInit {
  @Input() loginAlert!:boolean
  @Output('loginalert') loginEmitter =new EventEmitter()
  constructor(private router: Router){}
  ngOnInit(): void {
  
  }
  Login(){
    this.router.navigate(['signin']);
  }
  close(){
    this.loginEmitter.emit()
  }
}
