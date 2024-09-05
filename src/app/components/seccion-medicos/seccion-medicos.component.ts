import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-medicos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './seccion-medicos.component.html',
  styleUrl: './seccion-medicos.component.css'
})

export class SeccionMedicosComponent {
  searchTerm: string = '';
  selectedEspecialidad: number | null = null;
  especialidades: any[] = [];
  filteredMedicos: any[] = [];

  private readonly especialidadesUrl = 'http://apicmsr123.somee.com/api/Especialidad/getEspecialidad';
  private readonly medicosUrl = 'http://apicmsr123.somee.com/api/Medicos/getmedicos';
  private readonly medicosByEspecialidadUrl = 'http://apicmsr123.somee.com/api/Medicos/getMedicosByEspecialidad';
  private readonly medicosByNombreUrl = 'http://apicmsr123.somee.com/api/Medicos/getMedicosByNombre';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadEspecialidades();
    this.loadMedicos(); // Cargar todos los médicos inicialmente
  }

  loadEspecialidades(): void {
    this.http.get<any[]>(this.especialidadesUrl)
      .subscribe({
        next: (data) => {
          this.especialidades = data; // Ajusta el campo según tu API
          this.loadMedicos(); // Vuelve a cargar los médicos después de cargar las especialidades
        },
        error: (err) => {
          console.error('Error loading especialidades', err);
        }
      });
  }

  loadMedicos(especialidadId: number | null = null): void {
    let url = this.medicosUrl;
    if (especialidadId !== null) {
      url = `${this.medicosByEspecialidadUrl}/${especialidadId}`;
    }

    this.http.get<any[]>(url)
      .subscribe({
        next: (data) => {
          this.filteredMedicos = data.map(medico => ({
            ...medico,
            especialidadNombre: this.getEspecialidadNombre(medico.especialidadId),
            imagenUrl: medico.imagenBase64 ? this.convertBase64ToImageUrl(medico.imagenBase64) : 'assets/placeholder-image.jpg'
          }));
          this.applySearchTerm(); // Aplicar el término de búsqueda después de cargar los médicos
        },
        error: (err) => {
          console.error('Error loading medicos', err);
        }
      });
  }

  getEspecialidadNombre(especialidadId: number): string {
    const especialidad = this.especialidades.find(e => e.id === especialidadId);
    return especialidad ? especialidad.nombre : 'Desconocida';
  }

  loadMedicosByNombre(nombre: string): void {
    if (!nombre) return; // No hacer la solicitud si el término de búsqueda está vacío

    this.http.get<any[]>(`${this.medicosByNombreUrl}?nombre=${encodeURIComponent(nombre)}`)
      .subscribe({
        next: (data) => {
          this.filteredMedicos = data.map(medico => ({
            ...medico,
            especialidadNombre: this.getEspecialidadNombre(medico.especialidadId),
            imagenUrl: medico.imagenBase64 ? this.convertBase64ToImageUrl(medico.imagenBase64) : 'assets/placeholder-image.jpg'
          }));
        },
        error: (err) => {
          console.error('Error loading medicos by nombre', err);
        }
      });
  }

  convertBase64ToImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  onEspecialidadChange(event: any): void {
    const especialidadId = parseInt(event.target.value, 10);
    this.selectedEspecialidad = especialidadId;
    this.loadMedicos(especialidadId); // Cargar médicos según la especialidad seleccionada
  }

  onSearchTermChange(): void {
    if (this.searchTerm.trim()) {
      this.loadMedicosByNombre(this.searchTerm);
    } else {
      this.loadMedicos(this.selectedEspecialidad); // Recargar médicos si no hay término de búsqueda
    }
  }

  applySearchTerm(): void {
    // No necesitas aplicar el término de búsqueda aquí, ya que se hace en onSearchTermChange
  }
}
