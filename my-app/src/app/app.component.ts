import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="my-app";
  add:boolean=true;
  constructor( private service:ServiceService) {
  }

  login(){
    this.add=true;
  }

  Signup(){
    this.add=false;
  }

  ngOnInit() {
  }
}
