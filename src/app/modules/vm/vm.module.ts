import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateFormatterPipe } from '@shared/pipes/date-formatter.pipe';
import { VmDetailsComponent } from '@vm/components/vm-details/vm-details.component';
import { VmFormComponent } from './components/vm-form/vm-form.component';
import { VmListComponent } from './components/vm-list/vm-list.component';

@NgModule({
	declarations: [
		VmDetailsComponent,
		VmFormComponent,
		VmListComponent,
		DateFormatterPipe
	],
	imports: [
		CommonModule
	],
	providers: [DatePipe],
	exports: [DateFormatterPipe]
})
export class VmModule { }