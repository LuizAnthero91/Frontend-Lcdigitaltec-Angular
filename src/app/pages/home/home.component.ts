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
      description: 'Sites institucionais e páginas de serviço. Conteúdo organizado para consulta em computadores e celulares.',
      url: '/contato'
    },
    {
      icon: 'SHOP',
      title: 'Lojas virtuais',
      description: 'Catálogo de produtos e fluxo de compra online, com informações claras para quem vai comprar.',
      url: '/contato'
    },
    {
      icon: 'ERP',
      title: 'Sistemas de gestão',
      description: 'Sistemas para organizar atendimentos, clientes e registros financeiros conforme a rotina da operação.',
      
    },
    {
      icon: 'GPS',
      title: 'Rastreamento veicular',
      description: 'Consulta de localização e acompanhamento de veículos e frotas pela plataforma de rastreamento.',
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
