import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    private apiUrl = environment.apiUrl + '/categories';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.apiUrl);
    }

    create(data: Omit<Category, 'id'>): Observable<Category> {
        return this.http.post<Category>(this.apiUrl, data);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
