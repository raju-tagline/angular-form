import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService {
  public url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(public http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }

  public postUsers(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  public updateUser(userId: number, user: any): Observable<any> {
    const putUrl = this.url + '/' + userId;
    return this.http.put(putUrl, user);
  }

  public deleteUser(userId:number): Observable<{}> {
    const deleteUrl = this.url + '/' + userId;
    return this.http.delete(deleteUrl);
}  
}
