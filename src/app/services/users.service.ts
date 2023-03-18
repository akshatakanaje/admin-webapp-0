import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {      //json is used to transfer the data to the component
                     //we need a service to share a data from users.json file to users.component.html file
    //to access a data from json file under componet.html file or we need to share data from json to component we need services

  constructor(private httpClient: HttpClient) { }  //httpClient can read a static data as well as data coming from server

  getAllUsers (){
    return this.httpClient.get<any[]>('../../assets/json/users.json'); 
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>('../../assets/json/users.json');
  }
}
