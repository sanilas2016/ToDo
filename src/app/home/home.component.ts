
import { Component } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username ='';
  uid='';
  task:any;
  tasks:any;
  etask:any;
  DeleteTask='';
  currentUid=this.ds.currentuid;
  id:any;
constructor(private fb:FormBuilder,private ds:DataService, private router:Router){
  this.username = this.ds.currentusername;
  

  
  
}




AddTask(i:any){
  
  if(this.ds.flag==0){
    console.log("flag 0 works");
    this.uid= this.ds.currentuid;
    this.tasks = this.ds.addTask(this.task,this.uid);
    console.log(this.tasks);
    this.task="";
    
  }
  else{
    this.ds.flag=0;
    console.log("flag 1 works");
    this.updateTask(this.id,this.task);
  }
  
   
}


editTask(i:number){
  this.ds.flag = 1;
  this.id = i;
  this.etask = this.tasks[i];
  console.log(this.etask);
  this.task = this.etask;
  
}
updateTask(i:number,task:any){
  
  this.uid= this.ds.currentuid;
  this.tasks = this.ds.updateTask(i,this.uid,task)
}
removeTask(i:number){
  this.DeleteTask=this.tasks[i];
  this.tasks=this.ds.removeTask(this.DeleteTask, this.currentUid);
  console.log(this.tasks);
  this.task="";
}

logout(){
  localStorage.removeItem('currentUsername');
  localStorage.removeItem('currentUid');
  
  this.router.navigateByUrl('');
}

}

