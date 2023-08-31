import { HttpClient } from '@angular/common/http';
import { Component, Input,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseUrl, imageUrl } from 'src/app/constants/constants';

@Component({
  selector: 'app-rowpost',
  templateUrl: './rowpost.component.html',
  styleUrls: ['./rowpost.component.css']
})
export class RowpostComponent implements OnInit {
  
  @Input() url: string = ''; 
  @Input() title: string = '';
  @Input() issmal: boolean = false; 

  public image: string = imageUrl; 
  public movies: any;

  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.fetchData() 
  }

  functionName(){
    console.log("click");
  }
  fetchData() {
    const Url=BaseUrl+"/"+this.url
    this.http.get(Url).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
