import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { matchpassword } from './custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public service: ServiceService) {

  }

  // 

  signform = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
    confirm:new FormControl(''),
    username:new FormControl(''),
    company:new FormControl('')
  },{
    validators:matchpassword
  });

  // 



  // 
  get email()
  {
    return this.signform.get('email');
  }

  get pasword(){
    return this.signform.get('password');
  }

  // 

  sign(){
    
    console.log(this.signform.value);
    this.service.loginService(this.signform.value).subscribe((result:any)=>{
      console.log(result);
  }
  )
}
}
