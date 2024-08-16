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
      ubicacion: "C. Sanchez 148, Tenares 34000",
      imagenUrl: "https://i.postimg.cc/h4CdjxfZ/vidable-tenares.jpg",
      correo: "tenares@vidable.com",
      telefono: "+1 809-555-1234"
    },
    {
      nombre: 'Vidable Salcedo',
      ubicacion: "C/ Colon esquna, C. Dr. Guido Cabral, Salcedo 34000",
      imagenUrl: "https://i.postimg.cc/L6wvJGnW/vidable-salcedo.jpg",
      correo: "salcedo@vidable.com",
      telefono: "+1 809-555-5678"
    },
    {
      nombre: 'Vidable Villa Tapia',
      ubicacion: "Sanchez casi esquina C/ San Rafael, Villa Tapia",
      imagenUrl: "https://i.postimg.cc/MTm1tFZz/villa-tapia-vidable.jpg",
      correo: "villatapia@vidable.com",
      telefono: "+1 809-555-9012"
    },
  ];

  getGoogleMapsLink(ubicacion: string): string {
    const encodedLocation = encodeURIComponent(ubicacion);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }
}
