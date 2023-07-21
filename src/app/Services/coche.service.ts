import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {cocheModel} from '../Models/coche.model';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocheService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<cocheModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<cocheModel[]> {
    return lastValueFrom(this.http.get<cocheModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: cocheModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: cocheModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }
}

