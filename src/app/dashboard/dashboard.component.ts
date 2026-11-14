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

 adicionarAoCarrinho(id:string): void {
  
  //Produtos novoProduto = new Produtos();
  this.listaProdutos[0].id = id;

  //meuProduto: Produtos = null;

  
  
  //this.carrinho.adicionarProduto(this.listaProdutos);

    alert('Produto adicionado ao carrinho!');
  }
}
