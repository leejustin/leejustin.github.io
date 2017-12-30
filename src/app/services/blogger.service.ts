import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { BlogList } from '../blog/model/list';

@Injectable()

export class BloggerService {

    private static readonly API_KEY: string = 'AIzaSyBRl6jQNwtAjBBO3_iIe0D7uxoOKMlHM2o';
    private static readonly BASE_URL: string = 'https://www.googleapis.com/blogger/v3/blogs/8905257953465587624/';

    constructor(private http: Http) {

    }

    getPosts(): Observable<Object> {
        let url = BloggerService.BASE_URL + 'posts?key=' + BloggerService.API_KEY;

        return this.http
            .get(url)
            .map(v => new BlogList(v.json()));
    }

    private getOptions(): RequestOptions {
        return new RequestOptions();
    }

};