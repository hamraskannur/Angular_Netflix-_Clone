import { Component, OnInit } from '@angular/core';
import { API_KEY, BaseUrl, imageUrl } from "../../../constants/constants";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public movie: any;
  public image: string = imageUrl;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
     const url=`${BaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`
    this.http.get(url).subscribe((response: any) => {        
        const movie_num = Math.floor(Math.random() * response.results.length);
        this.movie = response.results[movie_num];
      });
  }
}
