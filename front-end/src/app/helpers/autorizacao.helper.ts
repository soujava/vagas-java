import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Autorizacao {


    public set(username: string, password: string) {
       localStorage.setItem('soujava_token', btoa(`${username}:${password}`));
    }

    public get() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': '*/*',
                'Authorization': `Basic ${localStorage.getItem('soujava_token')}`
            })
        };

    }

    public remove() {
        localStorage.removeItem('soujava_token');
    }
}