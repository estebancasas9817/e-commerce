import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { adminUrl } from 'src/config/api';
import { Admin } from '../models/admin';
const apiUrl = "http://localhost:3000/admin";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(apiUrl);
  }
}
