import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {      //json is used to transfer the data to the component
                     //we need a service to share a data from users.json file to users.component.html file
    //to access a data from json file under componet.html file or we need to share data from json to component we need services

  constructor(private httpClient: HttpClient) { }  //httpClient can read a static data as well as data coming from server

  getAll() {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/users?page=0&size=10`); //while merging the backend code with front end
  }                                    //1st we need to add baseUrl(need to change this one)

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${environment.baseUrl}/users/${id}`);
  }

  save(userObj:any) {
    return this.httpClient.post<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  update(userObj:any) {
    return this.httpClient.put<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  delete(userId:any) {
    return this.httpClient.delete<any[]>(`${environment.baseUrl}/users/${userId}`);
  }
}
