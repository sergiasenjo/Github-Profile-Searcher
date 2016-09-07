import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username:string;
    private client_id:string = '4a3c1e69cb2b82cae29a';
    private client_secret:string = 'fe8ca3933cf91fd696d2191343932f22cd0419fa';

    constructor(private _http:Http) {
        console.log('Github Service Ready');
        this.username = 'sergiasenjo';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}
