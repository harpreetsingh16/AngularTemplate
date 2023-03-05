import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { Model } from 'src/app/model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public model:Model;
constructor(public service:ServiceService){
  this.model=new Model();
 }

addtodo(){
  if(localStorage.length==0)
{
  localStorage.setItem('todo',JSON.stringify([this.model]));
  this.service.showi=true;
this.service.show();
this.service.data.title="";
this.service.data.content="";

}
else{
var storage=JSON.parse(localStorage.getItem('todo'));
storage.push(this.model);
localStorage.setItem('todo',JSON.stringify(storage));
this.service.showi=true;
this.service.show();
this.service.data.title="";
this.service.data.content="";

}
}

edit(){
  var storageArray=JSON.parse(localStorage.getItem('todo'));
  var ind=this.service.index;
  storageArray[ind] =this.service.data;
  localStorage.setItem('todo',JSON.stringify(storageArray));
  this.service.show();
}
}
