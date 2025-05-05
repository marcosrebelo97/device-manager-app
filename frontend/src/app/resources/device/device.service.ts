import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Device } from './device.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class DeviceService {
    private apiUrl = environment.apiUrl + '/devices';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Device[]> {
        return this.http.get<Device[]>(this.apiUrl);
    }

    create(data: Omit<Device, 'id'>): Observable<Device> {
        return this.http.post<Device>(this.apiUrl, data);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
