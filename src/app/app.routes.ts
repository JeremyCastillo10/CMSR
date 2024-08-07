import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'resultados', component: ResultadosComponent },
    { path: '', redirectTo: '/contacto', pathMatch: 'full' }
];

