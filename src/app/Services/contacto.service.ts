import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {contactoModel} from '../Models/contacto.model';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<contactoModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<contactoModel[]> {
    return lastValueFrom(this.http.get<contactoModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: contactoModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: contactoModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }

}
