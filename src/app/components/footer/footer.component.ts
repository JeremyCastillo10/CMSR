import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faXRay, faFlaskVial, faAmbulance, faBedPulse, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    // Agrega los íconos que quieras utilizar
    library.addIcons(faFacebook, faTwitter, faLinkedin, faInstagram);
  }
}
