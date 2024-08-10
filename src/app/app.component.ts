import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { CommonModule } from '@angular/common';
import { FlagNavComponent } from './components/flag-nav/flag-nav.component';
import { NgModule } from '@angular/core';
import { SeccionMedicosComponent } from './components/seccion-medicos/seccion-medicos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, NavbarComponent, InicioComponent, NosotrosComponent, SeccionMedicosComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'CMSR';
}
