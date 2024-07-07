import { Routes } from '@angular/router';
import { VmListComponent } from '@vm/components/vm-list/vm-list.component';
import { VmDetailsComponent } from '@vm/components/vm-details/vm-details.component';
import { VmFormComponent } from '@vm/components/vm-form/vm-form.component';

export const vmRoutes: Routes = [
	{ path: 'vms', component: VmListComponent },
	{ path: 'vms/register', component: VmFormComponent },
	{ path: 'vms/edit/:id', component: VmFormComponent },
	{ path: 'vms/:id', component: VmDetailsComponent }
];
