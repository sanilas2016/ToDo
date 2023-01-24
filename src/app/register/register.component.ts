
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})

export class RegisterComponent implements OnInit {

  

  //register model
  registerForm = this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    uid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],//array
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  //control - ts file model link to html file

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }
Register(){

  console.log(this.registerForm);
  
  var fname = this.registerForm.value.fname;
  var lname = this.registerForm.value.lname;
  var pswd = this.registerForm.value.pswd;
  var uid = this.registerForm.value.uid;
  var uname = fname+" "+lname;
  if(this.registerForm.valid){
    console.log(this.registerForm.get('uid')?.errors);
    
    const result =this.ds.register(uid,uname,pswd);
  if(result){
    alert("Register Successful");
    this.router.navigateByUrl('');
  }
  else{
    alert("Register Failed");
  }
  }
  else{
     console.log(this.registerForm.valid);
    
    alert("Invalid Form");
  }
  
}

}