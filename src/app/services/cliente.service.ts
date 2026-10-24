import { inject, Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private API = 'http://localhost:3000/clientes';

  private clienteHTTP = inject(HttpClient); 

  constructor() { }

  listar(): Observable<Cliente[]>{
    return this.clienteHTTP.get<Cliente[]>(this.API);
  }

  incluir(cliente:Cliente): Observable<Cliente>{
    return this.clienteHTTP.post<Cliente>(this.API, cliente)
  }

    excluir(cliente:Cliente): Observable<void>{
    return this.clienteHTTP.delete<void>(`${this.API}/${id}`)
  }

}
