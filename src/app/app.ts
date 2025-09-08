import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Login } from './auht/components/login/login';
import { MatSidenavModule } from '@angular/material/sidenav'
import { Menu } from './components/menu/menu';
import { ListInvoices } from './invoice/components/list-invoices/list-invoices';
import { IconService } from './services/icon-service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Login,MatSidenavModule,Menu,ListInvoices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appComponents');
  constructor(private iconService:IconService){
        this.iconService.registryIcons();
  }
}
