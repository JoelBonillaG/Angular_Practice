import { Component} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { MenuInterface } from '../../interfaces/menu-interface';
import { MenuService } from '../../services/menu-service';
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
 listMenu: MenuInterface[];

  constructor(private menuSrv: MenuService) {
    this.listMenu = this.menuSrv.getMenu();
  }

}
