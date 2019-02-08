import { Component, OnInit } from '@angular/core';
import { FoodieService } from "../foodie.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayMusic =[];
  searchContent ="";
  constructor(private movie: FoodieService, private router: Router,) { }

  
  arrayOfMovies = [];
  ngOnInit() {
   
}
getMusic(search){

      console.log(search, this.searchContent);
      this.movie.music(this.searchContent).subscribe((data : any)=>
      {
        console.log(data)
      data.restaurants= data.restaurants.map(e =>  {
      return e;
       })
        this.arrayMusic= data.restaurants;
      })
}

add(movie) {
  this.movie.addDataToMyServer(movie.name, movie.featured_image, movie.location.address).subscribe(function (data)
  {
console.log(data)
  })
}

viewData(name)
{
  this.movie.view(name);
}

}
