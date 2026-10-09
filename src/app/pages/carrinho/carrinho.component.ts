import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {


  constructor(public carrinho: CarrinhoService) {}

  aumentar(id: number): void {
    this.carrinho.aumentarQuantidade(id);
  }

  diminuir(id: number): void {
    this.carrinho.diminuirQuantidade(id);
  }

  remover(id: number): void {
    this.carrinho.removerProduto(id);
  }

  finalizarCompra(): void {
 
}

}
