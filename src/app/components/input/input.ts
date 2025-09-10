import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputComponent {          
  @Input() placeholder!: string;          
  @Input() type: string = 'text';        
  @Input() appearance!: MatFormFieldAppearance;                    
}
