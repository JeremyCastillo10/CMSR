import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsersRays, faFlaskVial, faAmbulance, faBedPulse, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
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
      title: 'TOMOGRAFIA',
      icon: faUsersRays, // Icono Font Awesome
    },
    {
      title: 'EMERGENCIA MEDICA',
      icon: faAmbulance, // Icono Font Awesome
    },
    {
      title: 'EMERGENCIA MEDICA',
      icon: faAmbulance, // Icono Font Awesome
    },
  ];
}
