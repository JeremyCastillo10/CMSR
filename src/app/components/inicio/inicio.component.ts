import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  images: string[] = [
    'https://i.postimg.cc/HnWXxMyT/inaugura.jpg',
    'https://i.postimg.cc/nzHHQP6B/pixelcut-export.png',
    'https://i.postimg.cc/85RxG2hq/Instalacion-CMSR.jpg',
    'https://i.postimg.cc/TYyk5xyf/InicioDR.jpg'
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
