import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmDetailsComponent } from './components/vm-details/vm-details.component';
import { VmListComponent } from './components/vm-list/vm-list.component';
import { VmRegisterComponent } from './components/vm-register/vm-register.component';
import { VmEditComponent } from './components/vm-edit/vm-edit.component';
import { VmDialogComponent } from './components/vm-dialog/vm-dialog.component';

@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrl: './vm.component.scss',
  standalone: true,
  imports: [ CommonModule, VmDetailsComponent, VmListComponent, VmRegisterComponent, VmEditComponent, VmDialogComponent ],
})
export class VmComponent {

}
