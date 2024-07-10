import { CommonModule } from '@angular/common';
import { Component, OnInit, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { VirtualMachine } from '@vm/models/vm.model';
import { VmService } from '@vm/services/vm.service';
import { VmStatus } from '@shared/interfaces/vm.interfaces';

@Component({
	selector: 'app-vm-reserve',
	templateUrl: './vm-reserve.component.html',
	styleUrl: './vm-reserve.component.scss',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule]
})
export class VmReserveComponent implements OnInit {
	vm: VirtualMachine = {} as VirtualMachine;
	vmForm: FormGroup;
	vmId = input<number>();
	closeDialog = output<void>();
	returnToDetails = output<void>();

	constructor(
		private vmService: VmService,
		private fb: FormBuilder
	) {
		this.vmForm = this.fb.group({
			reservedUserName: [null, Validators.required],
			reservedTo: [null, Validators.required],
			project: [null],
			comment: [null],
		});
	}

	ngOnInit(): void {
		if (this.vmId()) {
			this.vmService.getVm(this.vmId()!).subscribe(data => {
				this.vm = data;
				this.vmForm.patchValue({
					reservedUserName: this.vm.reservedUserName,
					reservedTo: this.vm.reservedTo,
					project: this.vm.project,
					comment: this.vm.comment
				});
			});
		}
	}

	onSubmit(): void {
		console.log(this.vmForm.value);
		this.vmForm.value.reservedFrom = new Date();
		this.vmForm.value.updatedAt = new Date();
		this.vmForm.value.status = VmStatus.Reserved;
		this.vmService.updateVm(this.vmId()!, this.vmForm.value).subscribe(() => {
			this.onCloseDialog();
		});
	}

	onReturnToDetails(): void {
		this.returnToDetails.emit();
	}

	onCloseDialog(): void {
		this.closeDialog.emit();
	}
}
