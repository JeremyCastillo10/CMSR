import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding, faUserDoctor, faClock, faCapsules, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
