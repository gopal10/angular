import { Component, OnInit } from '@angular/core';
import {FoodieService } from '../foodie.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private movie: FoodieService , private http : HttpClient) { }

  arrayOfMovies = [];

  ngOnInit() {

    this.movie.getFavFood().subscribe((data: any) => {
      console.log(data)
      data = data.map (e =>  { 
       return e 
       })
       this.arrayOfMovies = data;

    
  })
}
  delete(movie)
  {
    console.log(movie)

    return this.http.delete('http://localhost:3004/posts/'+movie).subscribe(console.log),
    this.arrayOfMovies = this.arrayOfMovies.filter(data=>movie!=data.id)
}


  // remove(movie : string): Observable number{
  //   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: cpHeaders });
  //   return this.http.delete(this.articleUrl +"/"+ articleId)
	//    .map(success => success.status)
	//    .catch(this.handleError);
 



  }