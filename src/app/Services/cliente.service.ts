import {Injectable} from '@angular/core';
import { environment } from '../environments/environments.prod';
import {clienteModel} from '../Models/cliente.model';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string = `${environment.baseUrl}/Consultation`;
  constructor(private readonly http: HttpClient) {}

  getConsultationById(id_consultation: number) {
    return lastValueFrom(this.http.get<clienteModel>(`${this.baseUrl}/${id_consultation}`));
  }

  getConsultation(): Promise<clienteModel[]> {
    return lastValueFrom(this.http.get<clienteModel[]>(`${this.baseUrl}`));
  }

  postConsultation(consultation: clienteModel) {
    
    return lastValueFrom(this.http.post(`${this.baseUrl}`, consultation));
  }
  putConsultation(consultation: clienteModel, id_consultation: number) { 
    return lastValueFrom(this.http.put(`${this.baseUrl}`, consultation));
  }

  deleteConsultation(id_consultation: any) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id_consultation}`));
  }
}
