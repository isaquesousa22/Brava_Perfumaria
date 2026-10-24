import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cliente: Cliente = {} as Cliente;
  confirmarSenha:string = "";


  private service = inject(ClienteService);
  private router = inject(Router);


  

  salvar() {

    if (this.cliente.senha != this.confirmarSenha) {
      alert('As senhas não são iguais');
      return;
    }

    this.service.incluir(this.cliente).subscribe({
      next: (cliente) => {
        console.log('Cadastrado com sucesso:', cliente);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar:', erro);
      }

    });

  }

}
