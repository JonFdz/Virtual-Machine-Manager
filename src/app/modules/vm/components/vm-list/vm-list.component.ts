import { Component, OnInit } from '@angular/core';
import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';
import { CommonModule } from '@angular/common';
import { DateFormatterPipe } from '@shared/pipes/date-formatter.pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-vm-list',
	templateUrl: './vm-list.component.html',
	styleUrls: ['./vm-list.component.scss'],
	standalone: true,
	imports: [ CommonModule, DateFormatterPipe]
})
export class VmListComponent implements OnInit {
	vms: VirtualMachine[] = [];

	constructor(private vmService: VmService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.vmService.getVms().subscribe(data => {
			this.vms = data;
		});
	}

	viewDetails(id: number | undefined): void {
		if (id) {
			this.router.navigate(['./', id], { relativeTo: this.route });
		}
	}

	createVm(): void {
		this.router.navigate(['./create'], { relativeTo: this.route });
	}
}
