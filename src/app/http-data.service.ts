import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from './interface';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService {
  private url: string = environment.URL + '/todos';
  public userDetail$:any = new BehaviorSubject([]);

  public userD$(){
    console.log('userD$ :>> ');
    return this.userDetail$.asObservable();
    
  }

  constructor(public http: HttpClient) {}


  //Read data for http
  public getData(): Observable<UserData[]> {
    // this.userDetail$.next(this.url);
    return this.http.get<UserData[]>(this.url);
  }

  //Create data in http
  public postUsers(user: UserData[]): Observable<UserData[]> {
    return this.http.post<UserData[]>(this.url, user);
  }

  //Update data of http
  public updateUser(userId: number, user: UserData[]): Observable<UserData[]> {
    const putUrl = this.url + '/' + userId;
    return this.http.put<UserData[]>(putUrl, user);
  }

  //Delete data of http
  public deleteUser(userId: number): Observable<UserData[]> {
    const deleteUrl = this.url + '/' + userId;
    return this.http.delete<UserData[]>(deleteUrl);
  }
}
