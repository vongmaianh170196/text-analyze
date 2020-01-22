import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AddTextService {
  url:string='http://localhost:5000/analyze';
  constructor(private http:HttpClient) { }

  addText(text:string):Observable<string>{
    return this.http.post<string>(this.url, {text: text}, httpOptions);
  }
}
