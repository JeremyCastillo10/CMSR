import { Component } from '@angular/core';
import { CardMedicos } from '../../models/medicos';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-seccion-medicos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './seccion-medicos.component.html',
  styleUrl: './seccion-medicos.component.css'
})
export class SeccionMedicosComponent {
  CardListMedicos = [
    {
      nombre: 'Dra. Ana María Aguasvivas Mata',
      profesion: 'Dermatóloga-Cirujana',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/pTTQNQzR/Ana-Maria-400x497.jpg'
    },
    {
      nombre: 'Dr. Luis Antonio García Cuevas',
      profesion: 'Cirujano Ortopeda Traumatología',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/d0nRSN75/pixelcut-export.jpg'
    },
    {
      nombre: 'Dra.Onaney Díaz',
      profesion: 'Médico Internista - Geriatra',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/K4XtgdV8/onaney.jpg'
    },
    {
      nombre: 'Karlen Fajardo',
      profesion: 'Dermatóloga-Cirujana',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/05z3DD3T/karen.jpg'
    },
    {
      nombre: 'Dr.Rafael Santos',
      profesion: 'Pediatra',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/SQHPrjbJ/RAFAEL-SANTOS-400x479.jpg'
    },
    {
      nombre: 'Dra.Nadia Natasha Ferreiras',
      profesion: 'Pediatra-Cirujano Pediatra',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/HxR6BvKf/ferreiras.jpg'
    },
    {
      nombre: 'Madeline Frías',
      profesion: 'Psicóloga Clínica',
      descripcion: '',
      imagenUrl: 'https://i.postimg.cc/Xq5Qhc6X/Madeline-Frias-200x271.png'
    },
  ]
}
