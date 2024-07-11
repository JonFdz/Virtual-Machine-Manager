import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';
import { VmStatus } from '@shared/interfaces/vm.interfaces';


@Component({
	selector: 'app-vm-details',
	templateUrl: './vm-details.component.html',
	styleUrls: ['./vm-details.component.scss'],
	standalone: true,
	imports: [CommonModule]
})
export class VmDetailsComponent implements OnInit {
	vm: VirtualMachine = {} as VirtualMachine;
	vmId = input.required<number>();
	showReserve = output<void>();
	showEdit = output<void>();
	closeDialog = output<void>();
	vmStatus = VmStatus;

	constructor(
		private vmService: VmService
	) { }

	ngOnInit(): void {
		if (this.vmId()) {
			this.vmService.getVm(this.vmId()).subscribe(data => {
				this.vm = data;
			});
		}
	}

	onShowReserve(): void {
		this.showReserve.emit();
	}

	onShowEdit(): void {
		this.showEdit.emit();
	}

	onCloseDialog(): void {
		this.closeDialog.emit();
	}

	releaseVm(): void {
		this.vm.reservedUserName = null;
		this.vm.reservedTo = null;
		this.vm.reservedFrom = null;
		this.vm.updatedAt = new Date();
		this.vm.status = VmStatus.Available;
		this.vmService.updateVm(this.vmId(), this.vm).subscribe(() => {
			this.closeDialog.emit();
		});
	}

	deleteVm(): void {
		this.vmService.deleteVm(this.vmId()!).subscribe(() => {
			this.closeDialog.emit();
		});
	}
}
