import { Component, inject, OnInit  } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produtos } from '../model/produtos';
import { FormsModule } from '@angular/forms';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent implements OnInit{
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtos.buscarPorId(id).subscribe({
        next: (produtoEncontrado) => {
          this.produto = produtoEncontrado;
        },
        error: (erro) => {
          console.error('Erro ao buscar produto:', erro);
        }
      });
    }
  }


 private produtos = inject(CadastroProdutosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  
  produto: Produtos = {
    id: '',
    nome: '',
    descricao: '',
    preco: '',
    quantidade: '',
    url: ''
  };

    salvar() {
   
    if (this.produto.id) {
      this.produtos.atualizar(this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/adminprodutos']); 
        },
        error: (erro) => {
          console.error('Erro ao atualizar produto:', erro);
          alert('Erro ao atualizar produto!');
        }
      });
    } else {
      
      delete (this.produto as any).id;

      this.produtos.incluir(this.produto).subscribe({
        next: (produtoCriado) => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/adminprodutos']); 
        },
        error: (erro) => {
          console.error('Erro ao cadastrar:', erro);
          alert('Erro ao cadastrar produto!');
        }
      });
    }
  }
}
