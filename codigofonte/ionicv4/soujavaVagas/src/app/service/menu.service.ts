import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public appPages = new Set();

  constructor() {}

  public menuPrincipal() {
    this.appPages = new Set([
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Vagas',
        url: '/vagas',
        icon: 'mail-unread'
      }
    ]);
  }
}
