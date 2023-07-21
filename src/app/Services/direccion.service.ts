import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {direccionModel} from '../Models/direccion.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {


  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<direccionModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<direccionModel[]> {
    return lastValueFrom(this.http.get<direccionModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: direccionModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: direccionModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }

}
