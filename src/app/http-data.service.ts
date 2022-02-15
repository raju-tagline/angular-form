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

  postUsers(data:any): Observable<any> {
    return this.http.post(this.url, data);
}
}
