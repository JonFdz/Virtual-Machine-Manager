import { Routes } from '@angular/router';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VmDetailsComponent } from './components/vm-details/vm-details.component';
import { VmFormComponent } from './components/vm-form/vm-form.component';

export const vmRoutes: Routes = [
	{ path: 'vms', component: VmListComponent },
	{ path: 'vms/create', component: VmFormComponent },
	{ path: 'vms/edit/:id', component: VmFormComponent },
	{ path: 'vms/:id', component: VmDetailsComponent }
];
