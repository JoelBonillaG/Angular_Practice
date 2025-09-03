import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [MatIconModule,    MatFormFieldModule,
    MatInputModule,MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(iconRegistry:MatIconRegistry, domSanitizer:DomSanitizer){
    iconRegistry.addSvgIcon("logo",
      domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo.svg")
    )
  }
}
