import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { InicioComponent } from "../../components/inicio/inicio.component";
import { NosotrosComponent } from "../../components/nosotros/nosotros.component";
import { SeccionMedicosComponent } from "../../components/seccion-medicos/seccion-medicos.component";
import { ServiciosComponent } from "../../components/servicios/servicios.component";
import { NosotrosStatsComponent } from "../../components/nosotros-stats/nosotros-stats.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [NavbarComponent, InicioComponent, NosotrosComponent, SeccionMedicosComponent, ServiciosComponent, NosotrosStatsComponent, FooterComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
