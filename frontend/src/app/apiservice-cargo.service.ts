import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiserviceCargoService {

  constructor(private http:HttpClient) { }

  getCargoUrl='http://localhost:5000/getCargos';

  getAllData():Observable<any>
  {
     return this.http.get(`${this.getCargoUrl}`)
  }

  postCargoUrl='http://localhost:5000/sendCargos';

  postData(data:any):Observable<any>
  {
    return this.http.post(`${this.postCargoUrl}`,data)
  }

  postCargoUrlId='http://localhost:5000/update';

  updateDataId(data:any,id:any):Observable<any>
  {
    let ids=id
   return this.http.post(`${this.postCargoUrlId}/${ids}`,data)
  }

  getCargoUrlId='';

  deleteCargoUrl='http://localhost:5000/deleteCargos';

   deleteDataId(id:any):Observable<any>
   {
     let ids=id;
     return this.http.delete(`${this.deleteCargoUrl}/${ids}`)
   }


}
