import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-menu',
  imports: [MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule ,
  CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  constructor(){}
    menuOptions = [
    { label: 'Clientes', icon: 'client', route: 'clients' },
    { label: 'Facturas', icon: 'invoice', route: 'invoices' },
   
  ];
}
