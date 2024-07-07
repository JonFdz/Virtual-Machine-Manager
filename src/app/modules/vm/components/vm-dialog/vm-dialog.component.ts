import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { VmDetailsComponent } from '@vm/components/vm-details/vm-details.component';
import { VmFormComponent } from '../vm-form/vm-form.component';
import { VmReserveComponent } from '@vm/components/vm-reserve/vm-reserve.component';

export enum DialogType {
	Details = 'Details',
	Reserve = 'Reserve'
}

@Component({
	selector: 'app-vm-dialog',
	standalone: true,
	imports: [VmDetailsComponent, VmFormComponent, VmReserveComponent],
	templateUrl: './vm-dialog.component.html',
	styleUrl: './vm-dialog.component.scss'
})
export class VmDialogComponent implements OnInit {
	contentToShow = '';
	vmId = 0;

	constructor(private dialogRef: MatDialogRef<VmDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: number) { }

	ngOnInit(): void {
		this.contentToShow = DialogType.Details;
		this.vmId = this.data;
	}

	openReserve(): void {
		this.contentToShow = DialogType.Reserve;
	}

	openEdit(): void {
		this.contentToShow = DialogType.Details;
	}

	deleteVm(): void {
		// Implementar la lógica para eliminar la máquina virtual
	}

	closeDialog(): void {
		this.dialogRef.close();
	}

}
