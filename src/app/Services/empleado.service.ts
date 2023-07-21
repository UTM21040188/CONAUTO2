import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {empleadoModel} from '../Models/empleado.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<empleadoModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<empleadoModel[]> {
    return lastValueFrom(this.http.get<empleadoModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: empleadoModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: empleadoModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }








}
