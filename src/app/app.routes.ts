import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vmRoutes } from '@vm/vm.routes';

export const routes: Routes = [
	{ path: '', redirectTo: '/vms', pathMatch: 'full' },
	...vmRoutes
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
