import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getweather(data:any){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=344fd1f6b2998408f258d35d44647f51`
    return this.http.get(url)
  }
}
