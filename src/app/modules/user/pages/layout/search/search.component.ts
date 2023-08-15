import { Component, OnInit, Input } from '@angular/core';
import { NearbyservicesService } from '../../../services/nearbyservices.service';
import { Search } from '../../../model/serviceState';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() data!:boolean

  search!: string;
  searchResult: Search[] | []=[];
  userid:string|null = JSON.parse(window.localStorage.getItem('userid')!);
  choosedDistrict!:string
  constructor(private service:NearbyservicesService){}
  searchService(event: any) {
    const exp = event.target.value.toString();
    const match = exp.match(/^[a-zA-z ]*/);
    const match2 = exp.match(/\s*/);
    if (match2[0] === event.target.value) {
      this.search = event.target.value;
    }
    if (match[0] === event.target.value && event.target.value !== '') {
      this.search = event.target.value;
    }
    this.service.searchServices(this.userid,this.search,this.choosedDistrict).subscribe((result)=> {
      this.searchResult = Array.isArray(result) ? result : []
      console.log(this.searchResult)
    })
  }

  ngOnInit(): void {
    this.service.locationSubject$.subscribe((val)=>{
      this.choosedDistrict = val
    })
  }

  searchServe(){
    
  }
}
 