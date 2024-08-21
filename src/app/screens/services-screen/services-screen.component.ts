import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXRay, faFlaskVial, faAmbulance, faBedPulse, faUserDoctor, faBabyCarriage, faBaby, faStethoscope, faTooth, faBrain, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-services-screen',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.css']
})

export class ServicesScreenComponent {
  CardSucursales: any;
  searchTerm: string = '';

  getGoogleMapsLink(arg0: any) {
    throw new Error('Method not implemented.');
  }
  CardListServicios: Array<{ title: string; icon: any }> = [
    {
      title: 'EMERGENCIA MEDICA',
      icon: faAmbulance, // Icono Font Awesome
    },
    {
      title: 'HOSPITALIZACION',
      icon: faBedPulse, // Icono Font Awesome
    },
    {
      title: 'LABORATORIO 24 HORAS',
      icon: faFlaskVial, // Icono Font Awesome
    },
    {
      title: 'Estudios de Imagen (rayos X, sonografía, tomografía)',
      icon: faXRay, // Icono Font Awesome
    },
    {
      title: 'CONSULTAS ESPECIALIZADAS',
      icon: faUserDoctor, // Icono Font Awesome
    },
    {
      title: 'PEDIATRÍA',
      icon: faBabyCarriage, // Icono Font Awesome
    },
    {
      title: 'GINECOLOGÍA Y OBSTETRICIA',
      icon: faBaby, // Icono Font Awesome
    },
    {
      title: 'CARDIOLOGÍA',
      icon: faHeartPulse, // Icono Font Awesome
    },
    {
      title: 'NEUROLOGÍA',
      icon: faBrain, // Icono Font Awesome
    },
    {
      title: 'MEDICINA INTERNA',
      icon: faStethoscope, // Icono Font Awesome
    },
  ];
  get filteredServicios() {
    const searchTermLower = this.searchTerm.trim().toLowerCase();

    // If search term is empty or no services match, return all services
    if (searchTermLower === '' || this.CardListServicios.every(servicio =>
      !servicio.title.toLowerCase().includes(searchTermLower)
    )) {
      return this.CardListServicios;
    }

    // Filter services based on the search term
    return this.CardListServicios.filter(servicio =>
      servicio.title.toLowerCase().includes(searchTermLower)
    );
  }
}
