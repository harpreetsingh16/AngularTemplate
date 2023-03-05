import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(public service:ServiceService){
    this.service.show();
  }




  edit(index:any){
    this.service.add=false;
    this.service.index=index;
    this.service.edit(index);
  }

  delete(index:any){
    var storage=JSON.parse(localStorage.getItem('todo'));
    storage.splice(index, 1);
  localStorage.setItem('todo',JSON.stringify(storage));
  this.service.show();
  }
}
