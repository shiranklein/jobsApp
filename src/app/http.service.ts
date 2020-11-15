import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://us-central1-better-roi.cloudfunctions.net/job-search'
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAPIData(){

    return this.http.get(this.url);
}
}
