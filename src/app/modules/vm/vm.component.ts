import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmDetailsComponent } from './components/vm-details/vm-details.component';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VmFormComponent } from './components/vm-form/vm-form.component';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrl: './vm.component.scss',
  standalone: true,
  imports: [ CommonModule, VmDetailsComponent, VmListComponent, VmFormComponent ]
})
export class VmComponent {

}
