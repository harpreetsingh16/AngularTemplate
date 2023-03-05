import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  constructor(public service: ServiceService) {

  }
  loginform= new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)])
  
  });

  get email()
  {
    return this.loginform.get('email');
  }

  get password(){
    return this.loginform.get('password');
  }


  login(){
    console.log(this.loginform.value);
    this.service.loginService(this.loginform.value).subscribe((result:any)=>{
      console.log(result);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log((this.loginform.value).constructor);
  }
}
