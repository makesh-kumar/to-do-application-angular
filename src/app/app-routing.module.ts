import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoBodyComponent } from './to-do-body/to-do-body.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ToDoBodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
