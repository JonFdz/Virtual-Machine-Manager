import { Component, OnInit } from '@angular/core';
import { VmService } from '@services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';

@Component({
	selector: 'app-vm-list',
	templateUrl: './vm-list.component.html',
	styleUrls: ['./vm-list.component.css']
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
