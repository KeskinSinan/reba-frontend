import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CalculationComponent } from './components/calculation/calculation.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'calculation',component:CalculationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
