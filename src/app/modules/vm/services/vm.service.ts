import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VirtualMachine } from '@vm/models/vm.model';

@Injectable({
	providedIn: 'root'
})
export class VmService {
	private apiUrl = 'http://localhost:3000/api/vms/';  // Cambia esto por la URL de tu backend

	constructor(private http: HttpClient) { }

	getVms(): Observable<VirtualMachine[]> {
		return this.http.get<VirtualMachine[]>(this.apiUrl);
	}

	getVm(id: number): Observable<VirtualMachine> {
		return this.http.get<VirtualMachine>(`${this.apiUrl}/${id}`);
	}

	createVm(vm: VirtualMachine): Observable<VirtualMachine> {
		return this.http.post<VirtualMachine>(this.apiUrl, vm);
	}

	updateVm(id: number, vm: VirtualMachine): Observable<VirtualMachine> {
		return this.http.put<VirtualMachine>(`${this.apiUrl}/${id}`, vm);
	}

	deleteVm(id: number): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
