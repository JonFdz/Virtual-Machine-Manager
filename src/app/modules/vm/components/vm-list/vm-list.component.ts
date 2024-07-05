import { Component, OnInit } from '@angular/core';
import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';

@Component({
	selector: 'app-vm-list',
	templateUrl: './vm-list.component.html',
	styleUrls: ['./vm-list.component.scss']
})
export class VmListComponent implements OnInit {
	vms: VirtualMachine[] = [];

	constructor(private vmService: VmService) { }

	ngOnInit(): void {
		this.vmService.getVms().subscribe(data => {
			this.vms = data;
		});
	}
}
