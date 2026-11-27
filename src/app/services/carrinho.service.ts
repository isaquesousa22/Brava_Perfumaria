
import { Injectable } from '@angular/core';

export interface ProdutoCarrinho {
  id: string | number; // Aceita IDs que sejam texto ou número.
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
      item => String(item.id) === String(produto.id)
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

  aumentarQuantidade(id: string | number): void {

   
    const produto = this.produtos.find(
      item => String(item.id) === String(id)
    );

    if (produto) {
      produto.quantidade++;
    }
  }

  diminuirQuantidade(id: string | number): void {

  
    const produto = this.produtos.find(
      item => String(item.id) === String(id)
    );

    if (!produto) return;

    if (produto.quantidade > 1) {
      produto.quantidade--;
    } else {
      this.removerProduto(id);
    }
  }

  removerProduto(id: string | number): void {

   
    this.produtos = this.produtos.filter(
      produto => String(produto.id) !== String(id)
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
