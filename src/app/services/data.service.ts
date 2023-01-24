import { identifierName } from '@angular/compiler';
import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // To get current User
  currentuid="";
  currentusername='';

  currentTask=''

  
  public flag=0;


  transaction:any;

  userDetails:any =
  {
    1000:{uid:1000,username:'Sanil A S',password:"a", tasks:[]}
  }
  constructor() {
    
   }
   saveDetails(){
    if(this.userDetails){
      localStorage.setItem('ToDoList',JSON.stringify(this.userDetails))
    }
    if(this.currentuid){
      localStorage.setItem('currentUid',JSON.stringify(this.currentuid))
    }
    if(this.currentusername){
      localStorage.setItem('currentUsername',JSON.stringify(this.currentusername))
    }
  }

  register(uid:any,username:any,password:any){
    let userDetails = this.userDetails;
    if(uid in userDetails){
      return false;
    }
    else{
      userDetails[uid]={
        uid:uid,
        username:username,
        password:password,
        tasks:[]
      }
      console.log(userDetails);
      this.saveDetails();
      return true;
      
    }
  }
  
  login(uid:any,pswd:any){
    let userDetails= this.userDetails;
    if(uid in userDetails){
      
      
  
     
      if(pswd==userDetails[uid].password){
        this.currentusername = userDetails[uid].username;
        this.currentuid = userDetails[uid].uid;
        this.saveDetails();
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  



  addTask(task:any,uid:any){
    if(task==''){
      alert("Please Enter the Task First")
    }
    else{
      var userDetails=this.userDetails;
      this.currentTask=task;
      userDetails[uid].tasks.push(task);
      this.saveDetails();
      return userDetails[uid].tasks;
    }
    
  }

  removeTask(DeleteTask:any,uid:any){
    var userDetails=this.userDetails;
    userDetails[uid].tasks = userDetails[uid].tasks.filter((tsks:any)=>tsks!=DeleteTask)
    return userDetails[uid].tasks;
  }
  updateTask(i:any,uid:any,task:any){
    this.userDetails[uid].tasks[i]="";
    this.userDetails[uid].tasks[i]+=task;

    console.log(this.userDetails[uid].tasks);
    this.saveDetails();
    return this.userDetails[uid].tasks;
  }
}
