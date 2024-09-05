import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';
import { icon } from '@fortawesome/fontawesome-svg-core';

export interface Articulo {
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
  diasCreado?: number;
  icono: string;
}

@Component({
  selector: 'app-articulos-detalles-screen',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule, MatIconModule, NgIf, RouterLink],
  templateUrl: './articulo-detalle-screen.component.html',
  styleUrls: ['./articulo-detalle-screen.component.css']
})
export class ArticuloDetalleScreenComponent implements OnInit {
  articulo: Articulo | null = null;
  faeye = faEye;
  isLoading = true; // Estado de carga
  private readonly apiUrl = 'https://apicmsr123.somee.com/api/Articulos';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const articuloId = +this.route.snapshot.params['id'];
    this.loadArticuloDetalle(articuloId);
  }

  loadArticuloDetalle(id: number): void {
    this.getArticuloById(id).subscribe({
      next: (data) => {
        this.articulo = data;
        if (this.articulo) {
          this.articulo.diasCreado = this.calculateDaysSince(this.articulo.fechaCreacion);
        }
        this.isLoading = false; // Finaliza la carga
      },
      error: (err) => {
        console.error('Error cargando detalle del artículo', err);
        this.isLoading = false; // Finaliza la carga incluso en error
      }
    });
  }

  getArticuloById(id: number) {
    return this.http.get<Articulo>(`${this.apiUrl}/GetArticulosById/${id}`);
  }

  convertBase64ToImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  calculateDaysSince(fechaCreacion: string): number {
    const fecha = new Date(fechaCreacion);
    const hoy = new Date();
    const diffTime = Math.abs(hoy.getTime() - fecha.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }
}
