import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogininComponent } from './loginin/loginin.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{
  path: 'login', component: LogininComponent,

},{
  path: '', redirectTo: '/login', pathMatch: 'full'
},
{
  path: 'home', component: HomepageComponent, 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
