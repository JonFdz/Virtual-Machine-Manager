import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { VmDetailsComponent } from '@vm/components/vm-details/vm-details.component';
import { VmReserveComponent } from '@vm/components/vm-reserve/vm-reserve.component';
import { VmEditComponent } from '../vm-edit/vm-edit.component';
import { VmService } from '@vm/services/vm.service';

export enum DialogType {
	Details = 'Details',
	Reserve = 'Reserve',
	Edit = 'Edit'
}

@Component({
	selector: 'app-vm-dialog',
	standalone: true,
	imports: [VmDetailsComponent, VmReserveComponent, VmEditComponent],
	templateUrl: './vm-dialog.component.html',
	styleUrl: './vm-dialog.component.scss'
})
export class VmDialogComponent implements OnInit {
	contentToShow = '';
	vmId = 0;

	constructor(private dialogRef: MatDialogRef<VmDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: number, private vmService: VmService) { }

	ngOnInit(): void {
		this.vmId = this.data;
		this.contentToShow = DialogType.Details;
	}

	openReserve(): void {
		this.contentToShow = DialogType.Reserve;
	}

	openEdit(): void {
		this.contentToShow = DialogType.Details;
	}

	deleteVm(): void {
		this.vmService.deleteVm(this.vmId).subscribe(() => {
			this.dialogRef.close();
		});
	}

	closeDialog(): void {
		this.dialogRef.close();
	}

}
