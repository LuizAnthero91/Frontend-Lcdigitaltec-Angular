import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly services = [
    'Site ou landing page',
    'Loja virtual',
    'Sistema ERP',
    'Rastreamento veicular',
    'Suporte e manutenção',
    'Outro projeto'
  ];

  contact: ContactForm = {
    name: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  };

  sendToWhatsApp(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const text = [
      'Olá, LC Digital Tec! Gostaria de conversar sobre um projeto.',
      '',
      `*Nome:* ${this.contact.name.trim()}`,
      this.contact.company.trim() ? `*Empresa:* ${this.contact.company.trim()}` : '',
      this.contact.phone.trim() ? `*Telefone:* ${this.contact.phone.trim()}` : '',
      `*Serviço de interesse:* ${this.contact.service}`,
      '',
      '*Sobre o projeto:*',
      this.contact.message.trim()
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/5531986204749?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
