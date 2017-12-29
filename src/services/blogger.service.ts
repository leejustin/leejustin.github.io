import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()

export class bloggerService {

    constructor(private http: Http) {

    }

    private theUrl = "hellos";

    getPosts(): Observable<PostsDto> {
        return this.http
            .get(this.theUrl, this.getOptions())
            .map(response => <PostsDto[]>response.json());
    }

    private getOptions(): RequestOptions {
        return new RequestOptions();
    }

};