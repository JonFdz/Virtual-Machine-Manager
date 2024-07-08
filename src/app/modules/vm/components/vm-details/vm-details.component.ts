import { Component, Inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
	selector: 'app-vm-details',
	templateUrl: './vm-details.component.html',
	styleUrls: ['./vm-details.component.scss'],
	standalone: true,
	imports: [CommonModule]
})
export class VmDetailsComponent implements OnInit {
	vm: VirtualMachine = {} as VirtualMachine;
	vmId = input<number>();

	constructor(
		private vmService: VmService, private dialog: MatDialogRef<VmDetailsComponent>
	) { }

	ngOnInit(): void {
		if (this.vmId()) {
			this.vmService.getVm(this.vmId()!).subscribe(data => {
				this.vm = data;
			});
		}
	}

	closeDialog(): void {
		this.dialog.close();
	}
}
