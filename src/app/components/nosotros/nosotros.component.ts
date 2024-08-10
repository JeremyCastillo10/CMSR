import { Component } from '@angular/core';
import { CardData } from '../../models/nosotroscard';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faUserDoctor, faClock, faCapsules, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  cardDataList = [
    {
      title: 'CITAS EL MISMO DÍA',
      description: 'Ten la facilidad de poder realizar tus citas el mismo día, con solo contactarte con nosotros',
      backgroundColor: 'white',
      link: '#',
      icon: faClock, // Icono Font Awesome
    },
    {
      title: 'INSTALACIONES DE CLASE MUNDIAL',
      description: 'Nuestras instalaciones cuentan con las mas alta comodidad y la mas alta tecnología en nuestros equipos',
      backgroundColor: 'white',
      link: '#',
      icon: faBuilding, // Icono Font Awesome
    },
    {
      title: 'MÉDICOS EXPERTOS',
      description: 'Nuestros profesionales tienen los conocimientos y experiencia necesaria para darte el mejor servicio y cuidado de tu salud',
      backgroundColor: 'white',
      link: '#',
      icon: faUserDoctor, // Icono Font Awesome
    },
    {
      title: 'TERAPIAS COMPLEMENTARIAS',
      description: 'Nuestros doctores realizan los tratamientos y terapias que permitirán la mas rápida recuperación de tu salud',
      backgroundColor: 'white',
      link: '#',
      icon: faCapsules, // Icono Font Awesome
    }
  ];
}
