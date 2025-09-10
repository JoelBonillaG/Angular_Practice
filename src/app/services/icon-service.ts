import { Injectable } from '@angular/core';
import { IconInterface } from '../interfaces/icon-interface';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private listIcons: IconInterface[] = [
    { name: 'logo', path: 'assets/icons/logo.svg' },
    { name: 'client', path: 'assets/icons/client.svg' },
    { name: 'invoice', path: 'assets/icons/invoice.svg' },
    { name: 'user', path: 'assets/icons/user.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registryIcons() {
    this.listIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
