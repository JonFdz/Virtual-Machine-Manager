import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dateFormatter',
	standalone: true
})
export class DateFormatterPipe implements PipeTransform {

	transform(value: Date | string | number, format: string = 'short'): string | null {
		if (!value) return null;

		const date = new Date(value);
		// Ejemplo de formateo simple, ajusta según necesites
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();

		if (format === 'short') {
			return `${day}/${month}/${year}`;
		}
		// Agrega más formatos según necesites
		return date.toISOString();
	}
}
