import { Component } from '@angular/core';

interface Project {
  name: string;
  eyebrow: string;
  description: string;
  tags: string[];
  url: string;
  action: string;
  theme: string;
  icon: string;
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
      description: 'Loja virtual moderna para apresentar produtos, fortalecer a marca e transformar visitas em vendas.',
      tags: ['E-commerce', 'Responsivo', 'Vendas online'],
      url: 'https://cinderelaibirite.com.br/',
      action: 'Visitar site',
      theme: 'cinderela',
      icon: '✦',
      external: true
    },
    {
      name: 'Compaq Reboque',
      eyebrow: 'Serviços automotivos',
      description: 'Site institucional direto e confiável, criado para apresentar serviços e facilitar o contato com clientes.',
      tags: ['Site institucional', 'Conversão', 'Mobile'],
      url: 'https://compaqreboque.com.br/',
      action: 'Visitar site',
      theme: 'compaq',
      icon: '⛓',
      external: true
    },
    {
      name: 'Rastreamento Veicular',
      eyebrow: 'Monitoramento em tempo real',
      description: 'Plataforma para acompanhar veículos, consultar rotas, receber alertas e administrar frotas com segurança.',
      tags: ['Geolocalização', 'Tempo real', 'Gestão de frota'],
      url: 'https://traccar.lcdigitaltec.com.br/',
      action: 'Abrir demonstração',
      theme: 'tracking',
      icon: '⌖',
      external: true
    },
    {
      name: 'ERP Auto Reboque Torá',
      eyebrow: 'Gestão empresarial',
      description: 'Sistema web sob medida para organizar atendimentos, clientes, financeiro e operações de auto reboque.',
      tags: ['ERP', 'Dashboard', 'Sistema web'],
      url: 'https://wa.me/5531986204749?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20demonstra%C3%A7%C3%A3o%20do%20ERP%20Auto%20Reboque%20Tor%C3%A1.',
      action: 'Solicitar demonstração',
      theme: 'erp',
      icon: '▦',
      external: true
    }
  ];
}
