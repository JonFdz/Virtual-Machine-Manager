import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vm } from './vm.model';  // Asegúrate de definir un modelo para la VM

@Injectable({
	providedIn: 'root'
})
export class VmService {
	private apiUrl = 'http://tu-backend-api.com/vms';  // Cambia esto por la URL de tu backend

	constructor(private http: HttpClient) { }

	getVms(): Observable<Vm[]> {
		return this.http.get<Vm[]>(this.apiUrl);
	}

	getVm(id: string): Observable<Vm> {
		return this.http.get<Vm>(`${this.apiUrl}/${id}`);
	}

	createVm(vm: Vm): Observable<Vm> {
		return this.http.post<Vm>(this.apiUrl, vm);
	}

	updateVm(id: string, vm: Vm): Observable<Vm> {
		return this.http.put<Vm>(`${this.apiUrl}/${id}`, vm);
	}

	deleteVm(id: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
