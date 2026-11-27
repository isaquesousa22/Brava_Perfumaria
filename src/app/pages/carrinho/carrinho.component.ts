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
 
}

}
