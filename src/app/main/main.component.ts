import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { House } from '../models/house';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  houses: Array<House> = new Array<House>();


house = {
 
  house_id: null,
  name: "",
  city: "",
  price: null,
  distance: null,
  houseArea: "",
  plotArea: "",
  link: ""

  
}

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
   
  }
  
  create(){
    let result: House = {
      
      house_id: this.house.house_id,
      name: this.house.name,
      city: this.house.city,
      price: this.house.price,
      distance: this.house.distance,
      houseArea: this.house.houseArea,
      plotArea: this.house.plotArea,
      link: this.house.link
    }
    this.mainService.postHouse(result).subscribe( house => {

    }, (err: Error) => {console.log(err.message)}, () => {
  
  this.back();
      
    });
  }

  back(){
      this.router.navigateByUrl("/home");
  }

  delete(id: number){
    this.mainService.deleteHouse(id).subscribe( house => {

    }, (err: Error) => {console.log(err.message)}, () => {
  
  this.back();
      
    });
  }
  
  
  

  
}










  // getHouses(){

  //   this.houses = [];
  //   this.mainService.getHouses().subscribe(json => {
  //     console.log(json);
  //     json.map(h => {
  //       this.houses.push(h);
  //     });
  //   });
  // }