import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { House } from '../models/house';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  houses: Array<House> = new Array<House>();

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(){

    this.houses = [];
    this.mainService.getHouses().subscribe(json => {
      json.map(h => {
        this.houses.push(h);
        console.log(h.house_id);
      });
    });
  }


  delete(id: number) {
    this.mainService.deleteHouse(id).subscribe(
      (response: Response) => {
        //olewam obiekt car z metody post
      },
      (err: Error) => {console.log(err.message)},
      () => { //complete
        this.getHouses();
      }
    );
  }



}
