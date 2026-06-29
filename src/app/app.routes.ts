import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent
  },
  {
    path: 'clientes',
    component: ClientsComponent,
    title: 'Clientes e projetos | LC Digital Tec'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
