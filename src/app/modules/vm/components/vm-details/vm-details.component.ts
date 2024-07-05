import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';

@Component({
	selector: 'app-vm-details',
	templateUrl: './vm-details.component.html',
	styleUrls: ['./vm-details.component.scss']
})
export class VmDetailsComponent implements OnInit {
	vm: VirtualMachine | undefined;

	constructor(
		private route: ActivatedRoute,
		private vmService: VmService
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.vmService.getVm(id).subscribe(data => {
				this.vm = data;
			});
		}
	}
}
