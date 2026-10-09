import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavdasboardComponent } from '../navdasboard/navdasboard.component';
import { HeaderdashboardComponent } from '../headerdashboard/headerdashboard.component';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FooterComponent, NavdasboardComponent, HeaderdashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

     constructor(public carrinho: CarrinhoService) {}

    adicionarAoCarrinho(): void {
    this.carrinho.adicionarProduto({
      id: 1,
      nome: 'Perfume Brava',
      preco: 150,
      imagem: 'assets/perfume.png'
    });

    alert('Produto adicionado ao carrinho!');
  }

}
