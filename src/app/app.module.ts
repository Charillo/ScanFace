import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from 'app/app-routing';
const appRoutes: Routes = [
  { path: 'login', component: LoginTemplateComponent }
  // เราจะนิยาม Route หรือเส้นทางของเราในนี้
  // เช่น
  // { path: 'pages', component: PageListComponent },
  // เพื่อบอกว่าเมื่อไหร่ที่เข้ามาจาก /pages ให้วิ่งไปใช้บริการคอมโพแนนท์ชื่อ PageListComponent 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
