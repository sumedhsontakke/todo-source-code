import { Component } from '@angular/core';
import { GlobalVariables } from "../../providers/global-variables"
import { HttpCallService } from "../../providers/http-call-service"
import { Database } from '../../providers/database';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  item:any;
  todoList:any = [];
  add:any = "";
  wholeObj: any;
  dbUniqueId:any;
  key:any;
  constructor(public activatedRoute: ActivatedRoute, public globalVariables: GlobalVariables,public database: Database,  public httpCallService:HttpCallService, ) {
    
    this.activatedRoute.params.subscribe((params: Params) => {
        let key = params['key'];
        this.key = key;
        console.log(key);
        this.ajaxloadData(key)
      });
//    this.loadData(this.item.id);
  }


  ajaxloadData(key){

    this.httpCallService.postData("users", {}, "")
    .then((data)=>{ console.log(data)
      for(let i = 0; i < data['length']; i++){ 
        if(data[i].id == key){
          this.item = data[i];
          console.log(this.item);
          this.loadData(this.item.id);
        }
      }
      
    },(err)=>{
      
    })
  }  

  addNewTodo(){
    console.log("data", this.add);
    //get last obj
    let value = "todo="+this.add+"&userId="+this.key;
    //select db

       this.httpCallService.postData("todos/XXX", value, "")
        .then((data)=>{
          alert("Added Successfully");
        },(err)=>{
          alert("Added Successfully");
        })   

        this.add = "";  
      
    }

  loadData(id){

       this.httpCallService.postData("todos", {}, "")
        .then((data)=>{
          console.log("server data", data);
          this.todoList = [];
          for(let i = 0; i< data["length"]; i++){
            if(data[i]['userId'] == id){
                //push server data in local db
                this.todoList.push(data[i]);
            }
          }
          console.log(this.todoList);

        },(err)=>{
        })        

    //get todo list by user
    //select db
  }  

  updateDb(value){
    console.log(value);
      let data = "todo="+value+"&userId="+this.key;
       this.httpCallService.postData("todos/XXX", data, "")
        .then((data)=>{
          alert("updated Successfully");
        },(err)=>{
          alert("Updated Successfully");
        })     

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
  }

}
