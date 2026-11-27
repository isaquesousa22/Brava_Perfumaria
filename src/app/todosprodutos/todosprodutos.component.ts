import { Component, inject } from '@angular/core';
import { HeaderdashboardComponent } from '../headerdashboard/headerdashboard.component';
import {NavdasboardComponent} from "../navdasboard/navdasboard.component";
import { RouterLink } from '@angular/router';
import {FooterComponent} from "../footer/footer.component";
import { CarrinhoService } from '../services/carrinho.service';
import { Produtos } from '../model/produtos';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';


@Component({
  selector: 'app-todosprodutos',
  imports: [HeaderdashboardComponent, NavdasboardComponent, RouterLink, FooterComponent],
  templateUrl: './todosprodutos.component.html',
  styleUrl: './todosprodutos.component.css'
})
export class TodosprodutosComponent {

  listaProdutos:Produtos[] = [];
  //novoProduto:Produtos;

  private produtos = inject(CadastroProdutosService);
  

  
   ngOnInit(): void {
    this.todosProdutos();
  }

  todosProdutos(): void {
    this.produtos.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
      }
    });
  }

    constructor(public carrinho: CarrinhoService) {
      
    }

    
 adicionarAoCarrinho(id: string): void {

  
  const produto = this.listaProdutos.find(
    item => item.id === id
  );

 
  if (!produto) {
    alert('Produto não encontrado!');
    return;
  }

  this.carrinho.adicionarProduto({
    id: produto.id, 
    nome: produto.nome,
    preco: Number(
      produto.preco
        .replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '.')
        .trim()
    ),
    imagem: produto.url
  });
    alert('Produto adicionado ao carrinho!');
  }

}
