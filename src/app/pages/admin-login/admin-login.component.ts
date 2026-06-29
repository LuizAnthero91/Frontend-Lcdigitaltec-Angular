import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  email = '';
  password = '';
  message = '';

  login(): void {
    this.password = '';
    this.message = 'Autenticação ainda indisponível. Nenhum dado foi enviado.';
  }
}
