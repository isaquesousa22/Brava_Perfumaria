import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admincliente',
  imports: [RouterLink],
  templateUrl: './admincliente.component.html',
  styleUrl: './admincliente.component.css'
})
export class AdminclienteComponent implements OnInit {
 listaClientes:Cliente[] = [];

  private service = inject(ClienteService);

  ngOnInit(): void {
      this.service.listar().subscribe({
        next: (clientes)=>{
          this.listaClientes = clientes;
        }
      
      });
  }

   editar(id:string){}

   excluir(id:string){
    this.service.excluir(id).subscribe({
      next: ()=> {this.listaClientes.filter(cliente=> cliente.id !== id);
      }
    });
   }
  

}
