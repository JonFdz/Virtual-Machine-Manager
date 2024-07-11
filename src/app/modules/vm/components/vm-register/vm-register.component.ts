import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { VmService } from '@vm/services/vm.service';
import { VmStatus } from '@shared/interfaces/vm.interfaces';



@Component({
	selector: 'app-vm-register',
	templateUrl: './vm-register.component.html',
	styleUrls: ['./vm-register.component.scss'],
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule]
})
export class VmRegisterComponent {
	vmForm: FormGroup;
	vmStatuses = Object.values(VmStatus);

	constructor(
		private fb: FormBuilder,
		private vmService: VmService,
		private router: Router
	) {
		this.vmForm = this.fb.group({
			vmName: [null, Validators.required],
			ip: [null, Validators.required],
			dnsName: [null, Validators.required],
			project: [null],
			environment: [null],
			status: [null, Validators.required],
			comment: [null],
			operatingSystem: [null],
			cpuCores: [null],
			gpu: [null],
			ram: [null],
			disk: [null]
		});
	}

	onSubmit(): void {
		this.vmForm.value.createdAt = new Date();
		this.vmForm.value.updatedAt = new Date();
		this.vmService.createVm(this.vmForm.value).subscribe(() => {
			this.router.navigate(['/']);
		});
	}
}
