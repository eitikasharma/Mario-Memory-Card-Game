import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from './../user-registration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private service:UserRegistrationService,private router:Router) { }
 @Output() name = new EventEmitter();
  message:any;
  credentials:any;
  flag:any;
  ngOnInit() {
  }

  onRegister(form)
  {

    // if(form.valid == true)
    // { 
    //   this.router.navigate(['/submit']);
    // }
  }
  registerProcess(form)
  { 
    
    console.log(form.value);
    if(form.valid == false)
    {
      alert("Fill all details")
    }
    else{
    alert("Registered Successfully");
    let response = this.service.doRegistration(form.value);
    response.subscribe((data) => this.message = data)
    }
  }
  onLogin(form) 
{
  this.name.emit(form.value.email);
  
  console.log(form);
	if(form.value.email!="" && form.value.password!=""){
		
let response = this.service.gettingCredentials();
response.subscribe((data) => this.credentials = data);
let email:String = form.value.email;
let password:String = form.value.password
for(let i=0;i<this.credentials.length;i++){
console.log(form.valid);
if( email == this.credentials[i].email && password == this.credentials[i].password)
{
//   this.auth.flag = true;
  this.flag=1;
  alert("Credentials Verified");
  this.router.navigateByUrl('/welcome');
  break;
}
else {
//   this.auth.flag = false;
//   console.log(this.credentials[i].password);
  this.flag = 0;
}
}
if(this.flag == 0)
{
  alert("Invalid Credentials");
}
}
else
{
	alert("Pls enter all fields");
}
}

}
