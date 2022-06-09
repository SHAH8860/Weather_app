import { Component, OnInit } from '@angular/core';
import { FoodapiService } from 'src/app/service/foodapi.service';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  food:any=[]
  anime:any=[]
  search:string=''
  city:string=''
  climate:string=''
  temp:any=0
  Mtemp:any=0
  Mintemp:any=0
  date=new Date()
  lat:any = 51.678418;
  lng:any = 7.809007;
  show:boolean=false
  list:any=[
    {
      name:'mango'
    },
    {
      name:'bana'
    },
    
  ]
  bg:string="red"
  

 

 

  constructor(private data:FoodapiService,private weather:WeatherService) { }

  ngOnInit(): void {
    this.list.forEach((a:any)=>{
     if(a.name==='mango'){
       this.bg="green"
     }

    })
    console.log(this.bg)
    
    
  }
  // getfood(){
  //   this.data.getfood().subscribe((res:any)=>{
  //     this.food=res
  //     console.log("foodList",this.food)
  //     console.log(res)
  //   })
  //   this.data.getanime().subscribe((res:any)=>{
  //     this.anime=res.data
  //     console.log("Anime",this.anime)
  //   })
  // }
  getweather(){
  this.weather.getweather(this.search).subscribe((res:any)=>{
    this.city=res.name
    this.climate=res.weather[0].main
    this.temp=(Number(res.main.temp)-273).toFixed(2)
    this.Mintemp=Number(res.main.temp_min-273).toFixed(2)
    this.Mtemp=Number(res.main.temp_max-273).toFixed(2)
    console.log(this.climate)
   
  })
  this.search=''
   
  }
  occlick($event:any){
    console.log($event.coords)
    // this.lat=event.coords.lat
    // this.lng=event.coords.lng
    // this.show=true

  }
  
  
  
  

}
