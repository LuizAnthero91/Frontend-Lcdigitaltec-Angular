import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  url?: string;
  external?: boolean;
}

interface Client {
  logo: string;
  name: string;
  type: string;
  tag: string;
  projectUrl: string;
  external?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services: Service[] = [
    {
      icon: 'WEB',
      title: 'Sites profissionais',
      description: 'Páginas rápidas, responsivas e preparadas para apresentar sua empresa com clareza.',
      url: '/contato'
    },
    {
      icon: 'SHOP',
      title: 'Lojas virtuais',
      description: 'Experiências de compra simples para divulgar produtos e transformar visitas em vendas.',
      url: '/contato'
    },
    {
      icon: 'ERP',
      title: 'Sistemas de gestão',
      description: 'Painéis sob medida para organizar atendimentos, clientes, financeiro e operação.',
      
    },
    {
      icon: 'GPS',
      title: 'Rastreamento veicular',
      description: 'Monitoramento de veículos e frotas com foco em controle, segurança e praticidade.',
      url: 'https://traccar.lcdigitaltec.com.br/',
      external: true
    }
  ];

  clients: Client[] = [
    {
      logo: 'COMPAQ',
      name: 'Compaq Reboque',
      type: 'Site institucional',
      tag: 'Site profissional',
      projectUrl: 'https://compaqreboque.com.br/',
      external: true
    },
    {
      logo: 'Cinderela',
      name: 'Cinderela de Ibirité',
      type: 'Site e e-commerce',
      tag: 'Loja virtual',
      projectUrl: 'https://cinderelaibirite.com.br/',
      external: true
    },
    {
      logo: 'TORÁ',
      name: 'Auto Reboque Torá',
      type: 'Site e sistema web',
      tag: 'Sistema web',
      projectUrl: 'https://reboquetora.lcdigitaltec.com.br/login',
      external: true
    },
    {
      logo: 'Traccar',
      name: 'Traccar',
      type: 'Rastreamento veicular',
      tag: 'Rastreamento',
      projectUrl: 'https://traccar.lcdigitaltec.com.br/',
      external: true
    }
  ];
}
