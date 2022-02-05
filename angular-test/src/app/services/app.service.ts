import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {

   constructor(private http: HttpClient) {}

    public get(url: string): Observable<any> {
        return this.http.get(url);
    }
}