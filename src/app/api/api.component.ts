// import { Component, OnInit } from '@angular/core';
// import { HttpService } from '../http.service';

// @Component({
//   selector: 'app-api',
//   templateUrl: './api.component.html',
//   styleUrls: ['./api.component.scss']
// })
// export class ApiComponent implements OnInit {

//   constructor(private _http: HttpService ) { }

//   ngOnInit(): void {

  import { Component, OnInit } from '@angular/core';
  import { HttpService } from '../http.service';

  @Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
  })
  export class ApiComponent implements OnInit {

    // tslint:disable-next-line: ban-types
    jobs: Object;

    constructor(private _http: HttpService) { }

    ngOnInit(){
      this._http.getAPIData().subscribe(res=>this.jobs = res);

    }
}
