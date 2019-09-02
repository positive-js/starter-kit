import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
    constructor(private httpClient: HttpClient) {}

    getList() {
        return this.httpClient.get('/api/users/');
    }

    getOne(id: string) {
        return this.httpClient.get(`api/vulnerabilities/${id}`);
    }

    create(record) {
        return this.httpClient.post('api/vulnerabilities', record);
    }

    update(id: string, record) {
        return this.httpClient.put(`api/vulnerability/${id}`, record);
    }

    remove(id: string) {
        return this.httpClient.delete(`api/vulnerability${id}`);
    }
}
