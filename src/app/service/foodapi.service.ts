import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {

  constructor(private http:HttpClient) { }
  getfood(){
    let url='https://api.spoonacular.com/recipes/715538/similar?apiKey=3b61bad24699454ba2fa5e4fdbbc0c0e'
    return  this.http.get(url)

  }
  getanime(){
    let url='https://anime-facts-rest-api.herokuapp.com/api/v1'
    return this.http.get(url)
  }
}
