import { Component, HostListener } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import {RouterLink}  from '@angular/router';

@Component({
  selector: 'app-menulateral',
  imports: [RouterLink],
  templateUrl: './menulateral.component.html',
  styleUrl: './menulateral.component.css'
})
export class MenulateralComponent {

   menuAberto = false;

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  @HostListener('document:keydown.escape')
  aoPressionarEsc(): void {
    this.fecharMenu();
  }

  constructor(public carrinho: CarrinhoService) {}

}
