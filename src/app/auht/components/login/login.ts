import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { ButtonComponent } from '../../../components/button/button';
import { InputComponent } from '../../../components/input/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule,ButtonComponent,InputComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}