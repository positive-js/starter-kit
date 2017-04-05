import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { createHash, timestamp } from '../../../../common/utils/api.utils';

@Injectable()
export class HeroesServices {

    private API_PUBLIC_KEY: string = '78faae78756679c05cbdd832c67ed6e0';
    private API_PRIVATE_KEY: string = 'a3d2c718a71e0bde2d144c1f4dc375bb30dc6d52';

    private API_URL: string = 'http://gateway.marvel.com/v1/public/characters';

    constructor(private http: Http) {}

    public getHeroes(): Observable<any> {
        const ts = timestamp();
        const hash = createHash(ts, this.API_PRIVATE_KEY, this.API_PUBLIC_KEY);

        const search: URLSearchParams = new URLSearchParams();

        search.set('ts', String(ts));
        search.set('apikey', this.API_PUBLIC_KEY);
        search.set('hash', String(hash));

        return this.http.get(this.API_URL, new RequestOptions({search}))
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || [];
    }
}
