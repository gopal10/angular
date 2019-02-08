import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FoodieService {

    constructor(private http: HttpClient,  private router: Router) { }

  getMovies() {
    
    return this.http.get(`https://developers.zomato.com/api/v2.1/search?q=&apikey=f6aa9ca0ec43e6089caf5ae5313de9e9`);
   
  }
  getFavFood()
  {
    return this.http.get("http://localhost:3004/posts");
  }
   
  music(loc)
  {
    console.log(loc);
    return this.http.get(`https://developers.zomato.com/api/v2.1/search?q=${loc}&apikey=f6aa9ca0ec43e6089caf5ae5313de9e9`);
  }


  view(res_id)
  {
      this.router.navigate(['/details'], { queryParams: { 'resto-name': res_id, } });
  }

  getdetails(id)
  {
    console.log(id);
   return this.http.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}&apikey=4cc170fd23ef15dcd323963048d0b919`);
  }


  addDataToMyServer(name, image,location)
  {
    return this.http.post("http://localhost:3004/posts",
    {
      "resto_name" : name,
      "resto_image" : image,
      "resto_add" : location

    })
  }

 
}
