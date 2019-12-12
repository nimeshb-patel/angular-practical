import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getData(): Observable<any> {
        const url = environment.baseUrl + 'search_by_date?tags=story';
        return this.httpClient.get<any>(url);
    }
}
