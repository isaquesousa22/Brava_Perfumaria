import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {
  private API = 'http://localhost:3000/produtos';

  private produtosHTTP = inject(HttpClient); 



  constructor() { }

  
    listar(): Observable<Produtos[]>{
      return this.produtosHTTP.get<Produtos[]>(this.API);
    }
  
    incluir(cliente:Produtos): Observable<Produtos>{
      return this.produtosHTTP.post<Produtos>(this.API, cliente)
    }

      buscarPorId(id: string): Observable<Produtos> {
       return this.produtosHTTP.get<Produtos>(`${this.API}/${id}`);
    }

    atualizar(produto: Produtos): Observable<Produtos> {
    return this.produtosHTTP.put<Produtos>(`${this.API}/${produto.id}`, produto);
   }
  
    excluir(id: string): Observable<void> {
    return this.produtosHTTP.delete<void>(`${this.API}/${id}`);
  }
}
