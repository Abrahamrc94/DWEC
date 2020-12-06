import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GeneralComponent } from './components/general/general.component';
import { SpainComponent } from './components/spain/spain.component';

const routes: Routes = [
  {path:'', redirectTo: '', pathMatch: 'full'},
  {path: 'paises', component: GeneralComponent},
  {path: 'spain', component: SpainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
