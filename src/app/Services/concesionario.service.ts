import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {concesionarioModel} from '../Models/concesionario.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<concesionarioModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<concesionarioModel[]> {
    return lastValueFrom(this.http.get<concesionarioModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: concesionarioModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: concesionarioModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }



}
