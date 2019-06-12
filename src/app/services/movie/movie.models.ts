import { HttpHeaders, HttpRequest } from '@angular/common/http';

export class MovieResponse {
    public body: any;
    public headers: HttpHeaders;
    public ok: boolean;
    public status: number;
    public statusText: string;
    public type: number;
    public url: number;
    constructor(data: any) {
        this.body = data.body;
        this.headers = data.headers;
        this.ok = data.ok;
        this.status = data.status;
        this.statusText = data.statusText;
        this.type = data.type;
        this.url = data.url;
    }
}

export function movieResponseFromRquest({headers, urlWithParams: url}: HttpRequest<any>): MovieResponse {
    return new MovieResponse({headers, ok: true, status: 200, type: 4, url});
}
