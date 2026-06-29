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

interface Metric {
  icon: string;
  value: string;
  label: string;
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
      icon: '🖥️',
      title: 'Sites e Landing Pages',
      description: 'Sites profissionais, rápidos e responsivos que geram credibilidade e novos negócios.'
    },
    {
      icon: '🛒',
      title: 'E-commerce e Vendas',
      description: 'Lojas virtuais completas com pagamentos online, integrações e gestão de pedidos.'
    },
    {
      icon: '📊',
      title: 'ERP para Empresas',
      description: 'Sistema de gestão integrado para otimizar processos, reduzir custos e aumentar resultados.'
    },
    {
      icon: '📍',
      title: 'Rastreamento Veicular',
      description: 'Monitoramento em tempo real, histórico de rotas, alertas e relatórios inteligentes.',
      url: 'https://traccar.lcdigitaltec.com.br/',
      external: true
    }
  ];

  clients: Client[] = [
    {
      logo: 'COMPAQ',
      name: 'Compaq Reboque',
      type: 'Site Institucional',
      tag: 'Site profissional',
      projectUrl: 'https://compaqreboque.com.br/',
      external: true
    },
    {
      logo: 'Cinderela',
      name: 'Cinderela de Ibirité',
      type: 'Site e E-commerce',
      tag: 'Loja Virtual',
      projectUrl: 'https://cinderelaibirite.com.br/',
      external: true
    },
    {
      logo: 'TORÁ',
      name: 'Auto Reboque Torá',
      type: 'Site e Sistema Web',
      tag: 'Sistema Web',
      projectUrl: '#contato'
    },
    {
      logo: 'Traccar',
      name: 'Traccar',
      type: 'Rastreamento Veicular',
      tag: 'Rastreamento',
      projectUrl: 'https://traccar.lcdigitaltec.com.br/',
      external: true
    }
  ];

  metrics: Metric[] = [

    {
      icon: '🎧',
      value: 'Suporte 24/7',
      label: 'Atendimento rápido e especializado'
    },
    {
      icon: '🛡️',
      value: '99,9%',
      label: 'Uptime dos sistemas e monitoramento'
    },

  ];
}
