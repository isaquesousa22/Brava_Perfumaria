import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';
import { FooterComponent } from '../footer/footer.component';
import { NavdasboardComponent } from '../navdasboard/navdasboard.component';
import { HeaderdashboardComponent } from '../headerdashboard/headerdashboard.component';
import { CarrinhoService } from '../services/carrinho.service';
import { Produtos } from '../model/produtos';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FooterComponent, NavdasboardComponent, HeaderdashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  listaProdutos:Produtos[] = [];
 

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