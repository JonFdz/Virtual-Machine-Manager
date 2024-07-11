import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { VmStatus } from '@shared/interfaces/vm.interfaces';
import { VirtualMachine } from '@vm/models/vm.model';
import { VmService } from '@vm/services/vm.service';

@Component({
	selector: 'app-vm-edit',
	templateUrl: './vm-edit.component.html',
	styleUrl: './vm-edit.component.scss',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
})
export class VmEditComponent implements OnInit {
	vmId = input.required<number>();
	vm: VirtualMachine = {} as VirtualMachine;
	closeDialog = output<void>();
	returnToDetails = output<void>();
	vmForm: FormGroup;
	vmStatuses = Object.values(VmStatus);

	constructor(
		private fb: FormBuilder,
		private vmService: VmService,
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

	ngOnInit(): void {
		if (this.vmId()) {
			this.vmService.getVm(this.vmId()).subscribe(data => {
				this.vm = data;
				this.vmForm.patchValue(this.vm);
				console.log(this.vmForm.value);
			});
		}
	}

	onSubmit(): void {
		this.vmForm.value.updatedAt = new Date();
		this.vmService.updateVm(this.vmId(), this.vmForm.value).subscribe(() => {
			this.returnToDetails.emit();
		});
	}

	onReturnToDetails(): void {
		this.returnToDetails.emit();
	}

	onCloseDialog(): void {
		this.closeDialog.emit();
	}
}
