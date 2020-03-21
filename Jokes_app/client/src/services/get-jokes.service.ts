import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetJokesService {

  private jokesUrl =  'http://localhost:3000/getData';
  constructor(private http: HttpClient) { 
  }

  //Hitting the external website to get data
  getJokes():Observable<Object[]>{
    return this.http.get<Object[]>(this.jokesUrl);
  }
}
