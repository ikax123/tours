import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class PersonService {
    private baseUrl: string = 'http://swapi.co/api/people/1';

    constructor(private http: Http) {
    }
 
    getPerson(): Observable<Person> {
        return this.http.get(this.baseUrl).map(response => response.json());
    }
}