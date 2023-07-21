import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {detalle_revisionModel} from '../Models/detalle_revision.model';  //Completar modelo
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleRevisionService {


  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<detalle_revisionModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<detalle_revisionModel[]> {
    return lastValueFrom(this.http.get<detalle_revisionModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: detalle_revisionModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: detalle_revisionModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }










}
