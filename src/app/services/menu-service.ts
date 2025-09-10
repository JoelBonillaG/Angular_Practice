    import { Injectable } from '@angular/core';
    import { MenuInterface } from '../interfaces/menu-interface';

    @Injectable({
      providedIn: 'root'
    })
    export class MenuService {

      private listMenu: MenuInterface[] = [
        { icon: 'client', title: 'Clientes', url: 'clients' },
        { icon: 'invoice', title: 'Facturas', url: 'invoices' }   
      ]

      public getMenu(): MenuInterface[] {
        return [...this.listMenu];
      }

      public getMenuByUrl(url: string) {
        return this.listMenu.find((menu) => menu.url.toLowerCase() == url.toLowerCase());
      }
    }