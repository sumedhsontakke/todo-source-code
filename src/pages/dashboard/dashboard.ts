import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpCallService } from "../../providers/http-call-service"
import { GlobalVariables } from "../../providers/global-variables"
import { Database } from "../../providers/database"
import { TodoListPage } from "../../pages/todo-list/todo-list"
import { Http, Headers, HttpModule } from '@angular/http';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardPage {

  users:any;
  constructor(public database: Database, public globalVariables: GlobalVariables,public router: Router, public httpCallService: HttpCallService) {
    this.loadData();
  }
  ngOnInit() {
    //this.router.navigate(['/dashboard', 1]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  loadData(){
    this.httpCallService.postData("users", {}, "")
    .then((data)=>{
    
      this.users = data;
    },(err)=>{
       
    })
  }
  
  userSelect(data){
    console.log(data);
    //set object in global variables
   
    this.router.navigate(['/todo-list', data.id]);
     this.globalVariables.passedData.next(data);
  //    this.navCtrl.push(TodoListPage, { "obj": data });
  }
}
