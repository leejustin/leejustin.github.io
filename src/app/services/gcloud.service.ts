import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class GcloudService {

    private static readonly BASE_URL: string = 'https://storage.googleapis.com/';
    private static readonly ACCOUNT_ID: string = 'playground-180602.appspot.com/';

    constructor() {
    }

    getPostThumbnail(id: string, year: string): string {
        return GcloudService.BASE_URL + GcloudService.ACCOUNT_ID + 'blog/' + year + '/' + id + '.jpg';
    }
};