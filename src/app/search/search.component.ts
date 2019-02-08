import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodieService} from '../foodie.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient, private food : FoodieService)  { }
  arrayOfMovies =[];
  ngOnInit() {

    return this.http.get('http://localhost:3004/posts')
    .subscribe(console.log);
  }

}
