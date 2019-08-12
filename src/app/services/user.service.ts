import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'https://api.github.com/';
  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<GUser[]>(`${this.BASE_URL}users`);
  }

  getUser(username: string): Observable<any> {
    return this.http.get<GUser>(this.BASE_URL + 'users/' + username);
  }
}
