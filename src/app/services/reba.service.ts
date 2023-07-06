import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import TableA from '../models/table-a';
import { Observable } from 'rxjs';
import TableB from '../models/table-b';
import TableC from '../models/table-c';
import Login from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class RebaService {

  url:string = 'http://localhost:8080/api/'

  constructor(private http:HttpClient) { }

  tableACalculation(tableA:TableA):Observable<number>{
    return this.http.post<number>(this.url + 'calculate/a',tableA);
  }
  tableBCalculation(tableB:TableB):Observable<number>{
    return this.http.post<number>(this.url + 'calculate/b', tableB);
  }
  rebaCalculation(tableC:TableC):Observable<number>{
    return this.http.post<number>(this.url + 'calculate/reba', tableC);
  }
  loginCheck(login:Login):Observable<boolean>{
    return this.http.post<boolean>(this.url + "login", login);
  }
}
