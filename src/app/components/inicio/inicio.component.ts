import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  images: string[] = [
    'https://sanrafaelrd.com/RecursosDeLaWeb/inicio/inauguracion.jpg',
    'https://sanrafaelrd.com/RecursosDeLaWeb/inicio/Instalacion-CMSR.jpg',
    'https://sanrafaelrd.com/RecursosDeLaWeb/inicio/InicioDR.jpg'
  ];
  currentImage: string = this.images[0];
  private imageIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];
    }, 4000); // Change image every 10 seconds
  }
}
