import { Component, OnInit, input, output } from '@angular/core';

import { VirtualMachine } from '@vm/models/vm.model';
import { VmService } from '@vm/services/vm.service';

@Component({
	selector: 'app-vm-reserve',
	standalone: true,
	imports: [],
	templateUrl: './vm-reserve.component.html',
	styleUrl: './vm-reserve.component.scss'
})
export class VmReserveComponent implements OnInit {
	vm: VirtualMachine = {} as VirtualMachine;
	vmId = input<number>();
	close = output<void>();
	closeReserve = output<void>();

	constructor(
		private vmService: VmService,
	) { }

	ngOnInit(): void {
		if (this.vmId()) {
			this.vmService.getVm(this.vmId()!).subscribe(data => {
				this.vm = data;
			});
		}
	}

	closeReserveDialog(): void {
		this.closeReserve.emit();
	}

	closeDialog(): void {
		this.close.emit();
	}
}
