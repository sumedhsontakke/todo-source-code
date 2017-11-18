import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//PAGES
import { DashboardPage } from "../pages/dashboard/dashboard";
import { TodoListPage } from "../pages/todo-list/todo-list";

//providers
import { HttpCallService } from "../providers/http-call-service"
import { Database } from "../providers/database"
import { GlobalVariables } from "../providers/global-variables"

const appRoutes: Routes = [
  {path: "", redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardPage },
  { path: 'todo-list/:key',      component: TodoListPage }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    TodoListPage
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),    
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpCallService,
    Database,
    GlobalVariables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
