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
      nombre: 'Principal',
      ubicacion: "Av Anibal Garcia 91, Tenares 34000",
      imagenUrl: "https://sanrafaelrd.com/RecursosDeLaWeb/sucursales/cmsr.jpg",
      correo: "tenares@vidable.com",
      telefono: "+1 809-587-8050"
    },
    {
      nombre: 'Vidable Tenares',
      ubicacion: "C. Sanchez 148, Tenares 34000",
      imagenUrl: "https://sanrafaelrd.com/RecursosDeLaWeb/sucursales/tenaresvidable.jpg",
      correo: "tenares@vidable.com",
      telefono: "+1 809-587-9090"
    },
    {
      nombre: 'Vidable Salcedo',
      ubicacion: "C/ Colon esquna, C. Dr. Guido Cabral, Salcedo 34000",
      imagenUrl: "https://sanrafaelrd.com/RecursosDeLaWeb/sucursales/salcedovidable.jpg",
      correo: "salcedo@vidable.com",
      telefono: "+1 809-587-9090"
    },
    {
      nombre: 'Vidable Villa Tapia',
      ubicacion: "Sanchez casi esquina C/ San Rafael, Villa Tapia",
      imagenUrl: "https://sanrafaelrd.com/RecursosDeLaWeb/sucursales/villatapiavidable.jpeg",
      correo: "villatapia@vidable.com",
      telefono: "+1 809-587-9090"
    },
  ];

  getGoogleMapsLink(ubicacion: string): string {
    const encodedLocation = encodeURIComponent(ubicacion);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }
}
