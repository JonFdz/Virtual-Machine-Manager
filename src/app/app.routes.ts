import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vmRoutes } from './modules/vm/vm.routes';

const routes: Routes = [
  { path: '', redirectTo: '/vms', pathMatch: 'full' },
  ...vmRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
