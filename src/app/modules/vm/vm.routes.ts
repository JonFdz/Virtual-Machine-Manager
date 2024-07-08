import { Routes } from '@angular/router';

import { VmListComponent } from '@vm/components/vm-list/vm-list.component';
import { VmRegisterComponent } from '@vm/components/vm-register/vm-register.component';


export const vmRoutes: Routes = [
	{ path: 'vms', component: VmListComponent },
	{ path: 'vms/register', component: VmRegisterComponent }
];
