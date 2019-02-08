import { Component, OnInit } from '@angular/core';
import { FoodieService } from "../foodie.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  name: string;
  private sub: any;
  fooddata: any;

  constructor(private movie :FoodieService,private route: ActivatedRoute) { }
  arrayOfMovies = [];

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(queryParams => {
      this.name = queryParams['resto-name'];
      console.log(this.name);

      this.movie.getdetails(this.name).subscribe((data: any) => {
        console.log(data)
         
          this.fooddata = data;
      })

});


  }

  add(movie) {
    this.movie.addDataToMyServer(movie.name, movie.featured_image, movie.location.address).subscribe(function (data)
    {
  console.log(data)
    })
  }
}
