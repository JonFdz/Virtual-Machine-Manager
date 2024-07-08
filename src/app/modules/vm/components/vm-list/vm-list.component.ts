import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';
import { VmDialogComponent } from '@vm/components/vm-dialog/vm-dialog.component';

import { DateFormatterPipe } from '@shared/pipes/date-formatter.pipe';

@Component({
	selector: 'app-vm-list',
	templateUrl: './vm-list.component.html',
	styleUrls: ['./vm-list.component.scss'],
	standalone: true,
	imports: [ CommonModule, FormsModule, DateFormatterPipe, VmDialogComponent ]
})
export class VmListComponent implements OnInit {
	vms: VirtualMachine[] = [];
	selectedVmId!: number;
	selectedStatus = '';
	filteredVms: VirtualMachine[] = [];

	constructor(private vmService: VmService, private dialog: MatDialog) { }

	ngOnInit(): void {
		this.vmService.getVms().subscribe(data => {
			this.vms = data;
			this.filteredVms = data;
		});
	}

	filterVms() {
		if (this.selectedStatus === '') {
			this.filteredVms = this.vms;
		} else {
			this.filteredVms = this.vms.filter(vm => vm.status === this.selectedStatus);
		}
	}

	openDialog(vmId: number): void {
		this.dialog.open(VmDialogComponent, {
			data: vmId
		});
		this.dialog.afterAllClosed.subscribe(() => {
			this.vmService.getVms().subscribe(data => {
				this.vms = data;
				this.filteredVms = data;
			});
		});
	}
}
