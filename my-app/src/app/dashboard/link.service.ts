import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
home:boolean=true;
about:boolean=false;
service:boolean=false;
resume:boolean=false;
contact:boolean=false;
review:boolean=false;
  constructor() { }
  clear(){
    this.home=false;
    this.about=false;
    this.service=false;
    this.resume=false;
    this.contact=false;
    this.review=false;
  }
  homef()
  {
    this.clear();
    this.home=true;
  }

  aboutf()
  {
    this.clear();
    this.about=true;
  }

  servicef(){
    this.clear();
    this.service=true;
  }

  resumef(){
    this.clear();
    this.resume=true;
  }
  contactf(){
    this.clear();
    this.contact=true;
  }
  reviewf(){
    this.clear();
    this.review=true;
  }

}
