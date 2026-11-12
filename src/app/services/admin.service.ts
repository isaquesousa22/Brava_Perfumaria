import { inject, Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API = 'http://localhost:3000/admin';
  private adminHTTP = inject(HttpClient);

  constructor() { }


    listar(): Observable<Admin[]>{
      return this.adminHTTP.get<Admin[]>(this.API);
    }
  
    incluir(admin:Admin): Observable<Admin>{
      return this.adminHTTP.post<Admin>(this.API, admin)
    }
  
    excluir(id: string): Observable<void> {
    return this.adminHTTP.delete<void>(`${this.API}/${id}`);
  }
  
}
