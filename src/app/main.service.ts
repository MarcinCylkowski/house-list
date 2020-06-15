import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from './models/house';


@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private http: HttpClient) { }


  getHouses(): Observable<Array<House>>{

    return this.http.get<Array<House>>('http://localhost:8080/api/house');

  }

  postHouse(house: House){
    return this.http.post('http://localhost:8080/api/house', house);
  }

  deleteHouse(id: number){
   return  this.http.delete('http://localhost:8080/api/house/' + id)
  }

}
