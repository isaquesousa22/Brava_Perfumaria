
import { Injectable } from '@angular/core';

export interface ProdutoCarrinho {
  id: number;
  nome: string;
  preco: number;
  imagem?: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: ProdutoCarrinho[] = [];

  adicionarProduto(
    produto: Omit<ProdutoCarrinho, 'quantidade'>
  ): void {
    const existente = this.produtos.find(
      item => item.id === produto.id
    );

    if (existente) {
      existente.quantidade++;
    } else {
      this.produtos.push({
        ...produto,
        quantidade: 1
      });
    }
  }

  aumentarQuantidade(id: number): void {
    const produto = this.produtos.find(
      item => item.id === id
    );

    if (produto) {
      produto.quantidade++;
    }
  }

  diminuirQuantidade(id: number): void {
    const produto = this.produtos.find(
      item => item.id === id
    );

    if (!produto) return;

    if (produto.quantidade > 1) {
      produto.quantidade--;
    } else {
      this.removerProduto(id);
    }
  }

  removerProduto(id: number): void {
    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );
  }

  calcularTotal(): number {
    return this.produtos.reduce(
      (total, produto) =>
        total + produto.preco * produto.quantidade,
      0
    );
  }

  contarItens(): number {
    return this.produtos.reduce(
      (total, produto) => total + produto.quantidade,
      0
    );
  }
}