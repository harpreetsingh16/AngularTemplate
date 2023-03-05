import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from './model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  showi:boolean=false;
  todo:any=[];
  add:boolean=true;
  index:any;
  constructor(private http: HttpClient){}
// login form;
//
  data:Model;
//
//

show(){
  this.todo=JSON.parse(localStorage.getItem('todo'));
  console.log(this.todo);
}

  edit(index:any)
  {
    var storage=JSON.parse(localStorage.getItem('todo'));
    this.data=storage[index];

  }
  loginService(credit: any) {
    console.log(credit);
    const url = "https://webhook.site/16442fcf-6362-45e0-992f-39bbb84e4766";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let postopt = Object.assign({ headers: headers, method: 'post' })
    return this.http.post(url, credit, postopt);

  }


}
