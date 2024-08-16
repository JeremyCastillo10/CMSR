import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXRay, faFlaskVial, faAmbulance, faBedPulse, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, MatIconModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  cardDataServicios = [
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
      title: 'Estudios de Imagen(rayosX, sonografia, tomografia)',
      icon: faXRay, // Icono Font Awesome
    },
    {
      title: 'CONSULTAS ESPECIALIZADAS',
      icon: faUserDoctor, // Icono Font Awesome
    },

  ];
}
