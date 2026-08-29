import { Component } from '@angular/core';

interface Project {
  name: string;
  eyebrow: string;
  description: string;
  highlight: string;
  tags: string[];
  url: string;
  action: string;
  theme: string;
  image: string;
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
      description: 'Vitrine digital com foco em coleções, navegação simples e uma experiência pensada para aproximar a loja das clientes.',
      highlight: 'Loja online pronta para vender com elegância, velocidade e presença de marca.',
      tags: ['E-commerce', 'Responsivo', 'Vendas online'],
      url: 'https://cinderelaibirite.com.br/',
      action: 'Visitar site',
      theme: 'cinderela',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://cinderelaibirite.com.br/',
      external: true
    },
    {
      name: 'Compaq Reboque',
      eyebrow: 'Serviços automotivos',
      description: 'Site institucional objetivo, feito para transmitir confiança, explicar os serviços e acelerar o contato em emergências.',
      highlight: 'Atendimento rápido no centro da experiência, do primeiro clique ao WhatsApp.',
      tags: ['Site institucional', 'Conversão', 'Mobile'],
      url: 'https://compaqreboque.com.br/',
      action: 'Visitar site',
      theme: 'compaq',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://compaqreboque.com.br/',
      external: true
    },
    {
      name: 'Rastreamento Veicular',
      eyebrow: 'Monitoramento em tempo real',
      description: 'Ambiente para acompanhar veículos, consultar rotas, receber alertas e administrar frotas com mais segurança.',
      highlight: 'Controle visual da frota com informações essenciais sempre à mão.',
      tags: ['Geolocalização', 'Tempo real', 'Gestão de frota'],
      url: 'https://traccar.lcdigitaltec.com.br/',
      action: 'Abrir demonstração',
      theme: 'tracking',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://traccar.lcdigitaltec.com.br/',
      external: true
    },
    {
      name: 'ERP Auto Reboque Torá',
      eyebrow: 'Gestão empresarial',
      description: 'Sistema web sob medida para organizar atendimentos, clientes, financeiro e operações de auto reboque em uma rotina única.',
      highlight: 'Painel operacional para reduzir retrabalho e dar clareza ao negócio.',
      tags: ['ERP', 'Dashboard', 'Sistema web'],
      url: 'https://reboquetora.lcdigitaltec.com.br/login',
      action: 'Acessar sistema',
      theme: 'erp',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://reboquetora.lcdigitaltec.com.br/login',
      external: true
    }
  ];
}
