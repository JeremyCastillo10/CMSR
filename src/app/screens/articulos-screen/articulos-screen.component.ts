import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Title, Meta } from '@angular/platform-browser';

interface Articulo {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  fechaCreacion: string;
  fechaModificacion: string;
  categoria: string;
  imagenPrincipal: string | null;
  imagenContenido: string | null;
  visitas: number;
  visible: boolean;
  diasCreado: number;
  icono: string;
}

@Component({
  selector: 'app-articulos-screen',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, HttpClientModule, FontAwesomeModule, MatIconModule, NgIf, RouterLink],
  templateUrl: './articulos-screen.component.html',
  styleUrls: ['./articulos-screen.component.css']
})
export class ArticulosScreenComponent implements OnInit {
  articulos: Articulo[] = [];
  isLoading = true;
  p = 1; // Página actual
  itemsPerPage = 10;
  private readonly articulosUrl = 'https://apicmsr123.somee.com/api/Articulos/GetArticulos';
  faCalendar = faCalendarAlt;

  constructor(
    private http: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.loadArticulos();
    this.titleService.setTitle('Últimas Novedades en Salud');
    this.meta.addTag({ name: 'description', content: 'Descubre los artículos más recientes y mantente al tanto de nuestras últimas actualizaciones sobre salud y bienestar.' });
    this.meta.addTag({ name: 'keywords', content: 'artículos, salud, bienestar, nutrición, ejercicio, noticias de salud' });
  }

  loadArticulos(): void {
    this.http.get<Articulo[]>(this.articulosUrl)
      .subscribe({
        next: (data) => {
          this.articulos = data.map(articulo => ({
            ...articulo,
            imagenPrincipal: articulo.imagenPrincipal ? this.convertBase64ToImageUrl(articulo.imagenPrincipal) : 'assets/placeholder-image.jpg',
            icono: 'faCalendar'
          }));
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error loading articulos', err);
          this.isLoading = false;
        }
      });
  }

  convertBase64ToImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }
}