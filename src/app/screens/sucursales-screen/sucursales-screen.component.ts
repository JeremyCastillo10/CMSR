import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sucursales-screen',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sucursales-screen.component.html',
  styleUrl: './sucursales-screen.component.css'
})
export class SucursalesScreenComponent {
  CardSucursales = [
    {
      nombre: 'Vidable Tenares',
      ubicacion: " C. Sanchez 148, Tenares 34000", // Icono Font Awesome
      imagenUrl: "https://i.postimg.cc/h4CdjxfZ/vidable-tenares.jpg"
    },
    {
      nombre: 'Vidable Salcedo',
      ubicacion: "C/ Colon esquna, C. Dr. Guido Cabral, Salcedo 34000", // Icono Font Awesome
      imagenUrl: "https://i.postimg.cc/L6wvJGnW/vidable-salcedo.jpg"
    },
    {
      nombre: 'Vidable Villa Tapia',
      ubicacion: "Sanchez casi esquina C/ San Rafael, Villa Tapia", // Icono Font Awesome
      imagenUrl: "https://i.postimg.cc/MTm1tFZz/villa-tapia-vidable.jpg"
    },
  ];
  getGoogleMapsLink(nombre: string): string {
    // Codifica la ubicación para que sea segura en la URL
    const encodedLocation = encodeURIComponent(nombre);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }
}
