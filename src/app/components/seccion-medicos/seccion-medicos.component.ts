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
      descripcion: 'Egresada de la Universidad Católica Nordestana UCNE, cuenta con un Post grado en el Instituto Dermatológico Dominicano y Cirugía de Piel Dr. Huberto Bogaert Díaz IDCP, con sub especialidad en Cirugía Dermatológica',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Ana-Maria-400x497.jpg'
    },
    {
      nombre: 'Dr. Luis Antonio García Cuevas',
      profesion: 'Cirujano Ortopeda Traumatología',
      descripcion: 'Tratamientos de las Enfermedades y cirugía de columna',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Luis-Ant.-Garcia-200x300.jpg'
    },
    {
      nombre: 'Dra. Onaney Díaz',
      profesion: 'Médico Internista - Geriatra',
      descripcion: 'Es egresada de Médico General de la Universidad Católica Nordestana, luego realiza sus estudios de post grado de Medicina Interna y Geriatría en el Hospital Universitario José María Cabral y Baez y en el Federico Trilla de Puerto Rico',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Onaney-Diaz-200x305.jpg'
    },
    {
      nombre: 'Karlen Fajardo',
      profesion: 'Dermatóloga-Cirujana',
      descripcion: 'Dermatólog',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Karen-2-400x500.jpg'
    },
    {
      nombre: 'Dr. Rafael Santos',
      profesion: 'Pediatra',
      descripcion: 'Pediatría general, crecimiento y desarrollo del niño sano',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/RAFAEL-SANTOS-400x479.jpg'
    },
    {
      nombre: 'Dra. Nadia Natasha Ferreiras',
      profesion: 'Pediatra-Cirujano Pediatra',
      descripcion: 'Pediatra-Cirujano Pediatra',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Natasha-Ferreiras-2-200x313.jpg'
    },
    {
      nombre: 'Madeline Frías',
      profesion: 'Psicóloga Clínica',
      descripcion: 'Psicóloga Clínica',
      imagenUrl: 'https://sanrafaelrd.com/wp-content/uploads/2022/08/Madeline-Frias-200x271.jpg'
    },
  ]
}
