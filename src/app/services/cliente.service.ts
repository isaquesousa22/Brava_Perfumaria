import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar():Cliente[]{
    return[
      {
        
          id: 1,
          cpf: "3124321435",
          nome: "Ana",
          dataNascimento: "12-10-2005",
          email: "ana@gmailcom",
          endereco: "rua dsidbif",
          senha: "3264588"
         
        },

          {
        
          id: 2,
          cpf: "87589497",
          nome: "Duarte",
          dataNascimento: "12-11-2003",
          email: "duarte@gmailcom",
          endereco: "rua dsidbif",
          senha: "6443324"
         
        }
    ];
  }

}
