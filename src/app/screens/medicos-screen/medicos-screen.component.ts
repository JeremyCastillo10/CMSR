import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicos-screen',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './medicos-screen.component.html',
  styleUrls: ['./medicos-screen.component.css']
})
export class MedicosScreenComponent {
  searchTerm: string = '';
  selectedEspecialidad: string = '';
  especialidades: string[] = [
    'Anestesia General',
    'Anestesia Pediátrica',
    'Cardiología/Hemodinamista',
    'Cardiología Pediátrica',
    'Cirugía Vascular',
    'Cirugía General',
    'Cirugía Pediátrica',
    'Cirugía Maxilofacial',
    'Dermatología',
    'Cirugía Facial',
    'Diabetología',
    'Endocrinología',
    'Gastroenterología Pediátrico',
    'Gastroenterología',
    'Geriatría',
    'Gineco-Obstetricia',
    'Intensivista',
    'Medicina Interna',
    'Medicina Familiar',
    'Neonatología',
    'Neumología',
    'Neurología',
    'Neurocirugía',
    'Ortopedia',
    'Traumatología',
    'Ortopedia Pediátrica',
    'Otorrinolaringología',
    'Oftalmología',
    'Pediatría',
    'Psiquiatría',
    'Psicología',
    'Urología',
    'Nefrología',

  ];
  CardListMedicos = [
    { id: '1', nombre: 'Dra. Ana María Aguasvivas Mata', especialidad: 'Dermatología y Cirugía Facial', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/Ana-Maria-400x497.jpg' },
    { id: '2', nombre: 'Dr. Luis Antonio García Cuevas', especialidad: 'Ortopedia y Traumatología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/dr cuevas.jpg' },
    { id: '3', nombre: 'Dra. Onaney Díaz', especialidad: 'Geriatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/onaney.jpg' },
    { id: '4', nombre: 'Karlen Fajardo', especialidad: 'Otorrinolaringología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/karen.jpg' },
    { id: '5', nombre: 'Dr. Rafael Santos', especialidad: 'Pediatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/RAFAEL-SANTOS-400x479.jpg' },
    { id: '6', nombre: 'Dra. Nadia Natasha Ferreiras', especialidad: 'Cirugía Pediátrica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/ferreiras (1).jpg' },
    { id: '7', nombre: 'Madeline Frías', especialidad: 'Psicología Clínica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/Madeline-Frias-200x271 (2).png' },
    { id: '8', nombre: 'Cristy Hernández', especialidad: 'Pediatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/cristy.jpeg' },
    { id: '9', nombre: 'Josué Veras', especialidad: 'Cirugía General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/jose veras.jpeg' },
    { id: '10', nombre: 'Thangie Cuevas', especialidad: 'Medicina Interna', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/thangie.jpeg' },
    { id: '11', nombre: 'Dr. Luis Yeuris Gómez', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/LuisYeuris.jpg' },
    { id: '12', nombre: 'Dra. Fanny García', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/FannyGarcia.jpg' },
    { id: '13', nombre: 'Dra. Melvia Conce', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/melviaConce.jpg' },
    { id: '14', nombre: 'Dr. Reina Concepción', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/ReinaConcepcion.jpg' },
    { id: '15', nombre: 'Dra. Cordero', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/Cordero.jpg' },
    { id: '16', nombre: 'Dra. Evelin Peña', especialidad: 'Anestesia General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/EvelinPeña.jpg' },
    { id: '17', nombre: 'Dr. José Palacín', especialidad: 'Anestesia Pediátrica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JosePalacin.jpg' },
    { id: '18', nombre: 'Dr. Manuel Camilo', especialidad: 'Cardiología/Hemodinamista', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/ManuelCamilo.jpg' },
    { id: '19', nombre: 'Dr. Rafael Peguero', especialidad: 'Cardiología/Hemodinamista', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/RafaelPeguero.jpg' },
    { id: '20', nombre: 'Dra. Dilenny De La Cruz', especialidad: 'Cardiología Pediátrica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/DilennyDeLaCruz.jpg' },
    { id: '21', nombre: 'Dr. Rudy More', especialidad: 'Cirugía Vascular', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/RudyMore.jpg' },
    { id: '22', nombre: 'Dr. Edwin Durán', especialidad: 'Cirugía General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/EdwinDuran.jpg' },
    { id: '23', nombre: 'Dr. Samuel Sánchez Camilo', especialidad: 'Cirugía General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/SamuelSanchez.jpg' },
    { id: '24', nombre: 'Dr. Pedro García', especialidad: 'Cirugía General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/PedroGarcia.jpg' },
    { id: '25', nombre: 'Dr. José Ramos', especialidad: 'Cirugía General', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JoseRamos.jpg' },
    { id: '26', nombre: 'Dra. Yenny Peña', especialidad: 'Cirugía Pediátrica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/YennyPeña.jpg' },
    { id: '27', nombre: 'Dr. Hamlet Then', especialidad: 'Cirugía Maxilofacial', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/HamletThen.jpg' },
    { id: '28', nombre: 'Dr. Carlos Martínez', especialidad: 'Diabetología y Endocrinología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/CarlosMartinez.jpg' },
    { id: '29', nombre: 'Dra. Adalnaurys Payano', especialidad: 'Diabetología y Endocrinología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/AldanaurysPayano.jpg' },
    { id: '30', nombre: 'Dr. Pedro Mercado', especialidad: 'Gastroenterología Pediátrico', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/PedroMercado.jpg' },
    { id: '31', nombre: 'Dr. Rodrigo Escolástico', especialidad: 'Gastroenterología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/RodrigoEscolasticos.jpg' },
    { id: '32', nombre: 'Dra. María De La Cruz', especialidad: 'Gastroenterología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MariaDeLaCruz.jpg' },
    { id: '33', nombre: 'Dra. Hernández', especialidad: 'Geriatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/DRAHernandez.jpg' },
    { id: '34', nombre: 'Dr. Melvin Lantigua', especialidad: 'Gineco-Obstetricia', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MelvinLantigua.jpg' },
    { id: '35', nombre: 'Dr. Willy Colón', especialidad: 'Gineco-Obstetricia', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/WillyColon.jpg' },
    { id: '36', nombre: 'Dra. María Esther Peralta', especialidad: 'Gineco-Obstetricia', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MariaPeralta.jpg' },
    { id: '37', nombre: 'Dra. Damaris Jerez', especialidad: 'Gineco-Obstetricia', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/DamarisJerez.jpg' },
    { id: '38', nombre: 'Dra. Arianna García', especialidad: 'Gineco-Obstetricia', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/AriannaGarcia.jpg' },
    { id: '39', nombre: 'Dra. Melkis Santana', especialidad: 'Intensivista', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MelkisSantana.jpg' },
    { id: '40', nombre: 'Dr. Miguel Muñoz', especialidad: 'Intensivista', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MiguelMuños.jpg' },
    { id: '41', nombre: 'Dra. Milagros Acosta', especialidad: 'Medicina Interna', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MilagrosAcosta.jpg' },
    { id: '42', nombre: 'Dr. Marino Ynoa', especialidad: 'Medicina Interna', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MarinoYnoa.jpg' },
    { id: '43', nombre: 'Dra. Mayra Rojas', especialidad: 'Medicina Interna', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MayraRojas.jpg' },
    { id: '44', nombre: 'Dra. Kenia Villanueva', especialidad: 'Medicina Familiar', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/KeniaVillanueva.jpg' },
    { id: '45', nombre: 'Dr. Benito Capellán', especialidad: 'Medicina Familiar', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/BenitoCapellan.jpg' },
    { id: '46', nombre: 'Dra. Verenice Acosta', especialidad: 'Pediatría y Neonatología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/vereniceAcosta.jpg' },
    { id: '47', nombre: 'Dra. Tomelyn Padilla', especialidad: 'Neumología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/TomelynPadilla.jpg' },
    { id: '48', nombre: 'Dr. Juan Tejada', especialidad: 'Neumología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JuanTejada.jpg' },
    { id: '49', nombre: 'Dra. María Tereza Peña', especialidad: 'Neurología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MariaTereza.jpg' },
    { id: '50', nombre: 'Dr. José Plasencia', especialidad: 'Neurocirugía', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JosePlasencia.jpg' },
    { id: '51', nombre: 'Dr. Juan David Suárez', especialidad: 'Neurocirugía', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/DavidSuarez.jpg' },
    { id: '52', nombre: 'Dr. Dario Lazala', especialidad: 'Ortopedia y Traumatología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/DarioLazala.jpg' },
    { id: '53', nombre: 'Dra. Soraida Cruz', especialidad: 'Urología & Nefrología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/SoraidaCruz.jpg' },
    { id: '54', nombre: 'Dr. Edwin Martínez', especialidad: 'Urología & Nefrología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/EdwinMartinez.jpg' },
    { id: '55', nombre: 'Dra. Maricruz Rosario', especialidad: 'Urología & Nefrología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/MaricruzRosario.jpg' },
    { id: '56', nombre: 'Dra. Carolina Herrera', especialidad: 'Ortopedia Pediátrica', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/CarolinaHerrera.jpg' },
    { id: '57', nombre: 'Dra. Jeni Hernandez', especialidad: 'Otorrinolaringología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JeniHernandez.jpg' },
    { id: '58', nombre: 'Dr. Juan Carlos Disla', especialidad: 'Oftalmología', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/JuanCarlosDisla.jpg' },
    { id: '60', nombre: 'Dra. Isabel Ortega', especialidad: 'Pediatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/IsabelOrtega.jpg' },
    { id: '61', nombre: 'Dra. Alixandra Mora', especialidad: 'Pediatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/AlixandraMora.jpg' },
    { id: '62', nombre: 'Dra. Orfelina Suero', especialidad: 'Psiquiatría', descripcion: '', imagenUrl: 'https://sanrafaelrd.com/RecursosDeLaWeb/medicos/OrfelinaSuero.jpg' }
  ];

  constructor(private router: Router) { }

  get especialidadesDisponibles() {
    const especialidades = this.CardListMedicos.map(medico => medico.especialidad);
    return Array.from(new Set(especialidades)); // Elimina duplicados
  }

  get filteredMedicos() {
    const searchTermLower = this.searchTerm.trim().toLowerCase();
    return this.CardListMedicos.filter(medico => {
      const matchesNombre = medico.nombre.toLowerCase().includes(searchTermLower);
      const matchesEspecialidad = medico.especialidad.toLowerCase().includes(searchTermLower);
      const matchesSelectedEspecialidad = !this.selectedEspecialidad || medico.especialidad.toLowerCase().includes(this.selectedEspecialidad.toLowerCase());
      return (matchesNombre || matchesEspecialidad) && matchesSelectedEspecialidad;
    });
  }

  onInputFocus() {
    this.selectedEspecialidad = ''; // Borra el valor del ComboBox
  }

  goToDoctorDetail(doctorId: string) {
    this.router.navigate(['/medicoDetalle', doctorId]);
  }
}
