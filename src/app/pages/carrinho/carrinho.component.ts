
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { forkJoin } from 'rxjs';

import { CarrinhoService } from '../../services/carrinho.service';
import { CadastroProdutosService } from '../../services/cadastro-produtos.service';

@Component({
  selector: 'app-carrinho',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  constructor(
    public carrinho: CarrinhoService,
    private produtosService: CadastroProdutosService
  ) {}

  aumentar(id: string | number): void {
    this.carrinho.aumentarQuantidade(id);
  }

  diminuir(id: string | number): void {
    this.carrinho.diminuirQuantidade(id);
  }

  remover(id: string | number): void {
    this.carrinho.removerProduto(id);
  }

  finalizarCompra(): void {

    
    if (this.carrinho.produtos.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    
    const consultas = this.carrinho.produtos.map(item =>
      this.produtosService.buscarPorId(String(item.id))
    );

    forkJoin(consultas).subscribe({

      next: (produtosEstoque) => {

        
        const estoqueInsuficiente = produtosEstoque.some(
          (produto, index) =>
            Number(produto.quantidade) <
            this.carrinho.produtos[index].quantidade
        );

        if (estoqueInsuficiente) {
          alert('Estoque insuficiente para um ou mais produtos!');
          return;
        }

        
        const atualizacoes = produtosEstoque.map((produto, index) => {

          const novaQuantidade =
            Number(produto.quantidade) -
            this.carrinho.produtos[index].quantidade;

          return this.produtosService.atualizar({
            ...produto,
            quantidade: String(novaQuantidade)
          });

        });

      
        forkJoin(atualizacoes).subscribe({

          next: () => {
            alert('Compra realizada com sucesso!');

            
            this.carrinho.produtos = [];
          },

          error: (erro) => {
            console.error('Erro ao atualizar estoque:', erro);
            alert('Não foi possível atualizar o estoque.');
          }

        });

      },

      error: (erro) => {
        console.error('Erro ao consultar estoque:', erro);
        alert('Não foi possível consultar o estoque.');
      }

    });

  }

}
