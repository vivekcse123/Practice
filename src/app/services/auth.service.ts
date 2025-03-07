import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  userData(){
    return this.http.get(this.url);
  }
}
