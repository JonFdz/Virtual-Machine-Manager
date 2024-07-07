import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VmComponent } from '@vm/vm.component';
import { HeaderComponent } from './modules/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, VmComponent, HeaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'virtual-machine-manager';
}
