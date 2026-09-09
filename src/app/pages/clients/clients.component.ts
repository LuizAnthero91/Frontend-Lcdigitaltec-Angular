import { Component } from '@angular/core';

interface Project {
  name: string;
  eyebrow: string;
  description: string;
  tags: string[];
  url: string;
  action: string;
  external: boolean;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  projects: Project[] = [
    {
      name: 'Cinderela de Ibirité',
      eyebrow: 'Moda e e-commerce',
      description: 'Loja virtual para apresentar coleções, consultar produtos e realizar compras online.',
      tags: ['E-commerce', 'Responsivo', 'Vendas online'],
      url: 'https://cinderelaibirite.com.br/',
      action: 'Visitar site',
      external: true
    },
    {
      name: 'Compaq Reboque',
      eyebrow: 'Serviços automotivos',
      description: 'Site institucional com descrição dos serviços de reboque e acesso ao contato da empresa.',
      tags: ['Site institucional', 'Contato', 'Mobile'],
      url: 'https://compaqreboque.com.br/',
      action: 'Visitar site',
      external: true
    },
    {
      name: 'Rastreamento Veicular',
      eyebrow: 'Monitoramento em tempo real',
      description: 'Plataforma para acompanhar a localização de veículos, consultar rotas e administrar frotas.',
      tags: ['Geolocalização', 'Tempo real', 'Gestão de frota'],
      url: 'https://traccar.lcdigitaltec.com.br/',
      action: 'Acessar plataforma',
      external: true
    },
    {
      name: 'ERP Auto Reboque Torá',
      eyebrow: 'Gestão empresarial',
      description: 'Sistema web para registrar atendimentos, clientes e informações financeiras da operação de auto reboque.',
      tags: ['ERP', 'Painel de gestão', 'Sistema web'],
      url: 'https://reboquetora.lcdigitaltec.com.br/login',
      action: 'Acessar sistema',
      external: true
    }
  ];
}
