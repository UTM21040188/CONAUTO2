import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.prod';
import {proveedorModel} from '../Models/proveedor.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<proveedorModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<proveedorModel[]> {
    return lastValueFrom(this.http.get<proveedorModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: proveedorModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: proveedorModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }




}
