import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environments.prod';
import {categoriaModel} from '../Models/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<categoriaModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<categoriaModel[]> {
    return lastValueFrom(this.http.get<categoriaModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: categoriaModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: categoriaModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }
}
