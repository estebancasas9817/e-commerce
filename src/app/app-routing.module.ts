import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrillaHomeComponent } from './components/grilla-home/grilla-home.component';

const routes: Routes = [
  // {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:GrillaHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
