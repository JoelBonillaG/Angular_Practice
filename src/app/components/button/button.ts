import { Component, Input } from '@angular/core';
import { MatButtonAppearance, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class ButtonComponent {
   @Input() label!: string;
  @Input() type!: MatButtonAppearance; 
  @Input() color!: string;
}
