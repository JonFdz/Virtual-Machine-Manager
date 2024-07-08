import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vm-edit',
  standalone: true,
  imports: [],
  templateUrl: './vm-edit.component.html',
  styleUrl: './vm-edit.component.scss'
})
export class VmEditComponent {
	@Input({required: true}) vmId!: number;

}
