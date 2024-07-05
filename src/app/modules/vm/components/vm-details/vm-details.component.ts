import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VmService } from '@vm/services/vm.service';
import { VirtualMachine } from '@vm/models/vm.model';
import { DateFormatterPipe } from '@shared/pipes/date-formatter.pipe';

@Component({
	selector: 'app-vm-details',
	templateUrl: './vm-details.component.html',
	styleUrls: ['./vm-details.component.scss'],
	standalone: true,
	imports: [DateFormatterPipe]
})
export class VmDetailsComponent implements OnInit {
	vm: VirtualMachine = {} as VirtualMachine;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private vmService: VmService,
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		if (id) {
			this.vmService.getVm(+id).subscribe(data => {
				this.vm = data;
			});
		}
	}

	editVm(id: number): void {
		if (id) {
			this.router.navigate(['../edit', id], { relativeTo: this.route });
		}
	}

	deleteVm(id: number): void {
		if (id) {
			this.vmService.deleteVm(id).subscribe(() => {
				this.router.navigate(['/']);
			});
		}
	}
}
