import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachine } from '@VmModels/vm.model';

@Injectable({
	providedIn: 'root'
})
export class VmService {
	private apiUrl = 'http://tu-backend-api.com/vms';  // Cambia esto por la URL de tu backend

	constructor(private http: HttpClient) { }

	getVms(): Observable<VirtualMachine[]> {
		return this.http.get<VirtualMachine[]>(this.apiUrl);
	}

	getVm(id: string): Observable<VirtualMachine> {
		return this.http.get<VirtualMachine>(`${this.apiUrl}/${id}`);
	}

	createVm(vm: VirtualMachine): Observable<VirtualMachine> {
		return this.http.post<VirtualMachine>(this.apiUrl, vm);
	}

	updateVm(id: string, vm: VirtualMachine): Observable<VirtualMachine> {
		return this.http.put<VirtualMachine>(`${this.apiUrl}/${id}`, vm);
	}

	deleteVm(id: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
