import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VmService } from '@vm/services/vm.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualMachine } from '@vm/models/vm.model';

@Component({
	selector: 'app-vm-form',
	templateUrl: './vm-form.component.html',
	styleUrls: ['./vm-form.component.scss']
})
export class VmFormComponent implements OnInit {
	vmForm: FormGroup;
	isEdit: boolean = false;
	vmId: number | null = null;

	constructor(
		private fb: FormBuilder,
		private vmService: VmService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.vmForm = this.fb.group({
			name: ['', Validators.required],
			status: ['', Validators.required]
			// Otros campos relevantes
		});
	}

	ngOnInit(): void {
		this.vmId = 1;
		if (this.vmId) {
			this.isEdit = true;
			this.vmService.getVm(this.vmId).subscribe(data => {
				this.vmForm.patchValue(data);
			});
		}
	}

	onSubmit(): void {
		if (this.vmForm.valid) {
			if (this.isEdit && this.vmId) {
				this.vmService.updateVm(this.vmId, this.vmForm.value).subscribe(() => {
					this.router.navigate(['/']);
				});
			} else {
				this.vmService.createVm(this.vmForm.value).subscribe(() => {
					this.router.navigate(['/']);
				});
			}
		}
	}
}
