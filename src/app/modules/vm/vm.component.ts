import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmDetailsComponent } from './components/vm-details/vm-details.component';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrl: './vm.component.scss',
  standalone: true,
  imports: [ CommonModule, VmDetailsComponent ]
})
export class VmComponent {

}
