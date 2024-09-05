import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from "./Especiliadad"
import { Medico } from "./medicosScreen"

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://cmsrapi.somee.com/api';

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.apiUrl}/Medicos/getMedicos`);
  }

  getEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(`${this.apiUrl}/Especialidad/getEspecialidad`);
  }
}
