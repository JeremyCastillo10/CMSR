import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NosotrosScreenComponent } from './screens/nosotros-screen/nosotros-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { SucursalesScreenComponent } from './screens/sucursales-screen/sucursales-screen.component';

export const routes: Routes = [
    { path: 'home', component: HomeScreenComponent },
    { path: 'nosotros', component: NosotrosScreenComponent },
    { path: 'servicios', component: ServicesScreenComponent },
    { path: 'surcursales', component: SucursalesScreenComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

