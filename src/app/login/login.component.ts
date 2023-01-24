import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   

  loginForm = this.fb.group({
    uid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){

  }
  Login(){
   var uid=this.loginForm.value.uid;
   var pswd=this.loginForm.value.pswd;
    // console.log(this.loginForm.value);
    
   if(this.loginForm.valid){
    const result = this.ds.login(uid,pswd);
    if(result){
      
      this.router.navigateByUrl('home');
    }
    else{
      alert("Login Failed");
    }
   }
    else{
      alert("Invalid Userdetails")
    }
  }
}
