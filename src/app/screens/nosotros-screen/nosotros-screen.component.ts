import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "../../components/inicio/inicio.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { faPerson, faNoteSticky, faUsers, faUserMd, faEye, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nosotros-screen',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, InicioComponent, FooterComponent, NavbarComponent, FontAwesomeModule],
  templateUrl: './nosotros-screen.component.html',
  styleUrls: ['./nosotros-screen.component.css']
})
export class NosotrosScreenComponent {
  icons = [
    faPerson,
    faNoteSticky,
    faUsers,
    faUserMd,
    faEye,
    faHandHoldingHeart
  ];
}
