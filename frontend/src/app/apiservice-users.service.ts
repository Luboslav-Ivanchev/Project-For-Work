import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceUsersService {

  constructor(private http:HttpClient) { }

  getUsersUrl=`http://localhost:7000/getData`;

  getAllUsers():Observable<any>{
    return this.http.get(`${this.getUsersUrl}`)
  }

  postUserUrl=`http://localhost:7000/sendData`;

  postUser(data:any):Observable<any>{
    return this.http.post(`${this.postUserUrl}`,data)
  }

  updateUserInfo=`http://localhost:7000/update`;

  updateUser(data:any,id:any):Observable<any>
  {
    let ids=id
    return this.http.post(`${this.updateUserInfo}/${ids}`,data)
  }


  logout(){
    this.loginStatus.next(false)
    console.log(this.loginStatus);
    console.log('Logged out!')
  }

  checkLoginStatus():boolean{
        return false;
  }

  get isLoggedIn(){
    this.loginStatus.next(true);
    console.log(this.loginStatus)
    console.log('Logged in!')
    return this.loginStatus.asObservable()
  }

  private loginStatus=new BehaviorSubject<boolean>(this.checkLoginStatus())

}
