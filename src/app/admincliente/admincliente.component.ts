import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-admincliente',
  imports: [],
  templateUrl: './admincliente.component.html',
  styleUrl: './admincliente.component.css'
})
export class AdminclienteComponent implements OnInit {
 listaClientes:Cliente[] = [];

  private service = inject(ClienteService);

  ngOnInit(): void {
    this.listaClientes = this.service.listar();
  }

   editar(id:number){}
   excluir(id:number){}
  

}
