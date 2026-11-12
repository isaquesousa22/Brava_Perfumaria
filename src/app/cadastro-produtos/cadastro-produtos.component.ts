import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Produtos } from '../model/produtos';
import { FormsModule } from '@angular/forms';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [RouterLink, HeaderComponent, FormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {

  private produtos = inject(CadastroProdutosService);
  private router = inject(Router);

  salvar(){

    this.produtos.incluir(this.produtos).subscribe({
      next: (produtos) => {
        console.log('Cadastrado com sucesso:', produtos);
  
      },
      error: (erro) => {
        console.error('Erro ao cadastrar:', erro);
      }

    });

  }

  }

