import { Component } from '@angular/core';
import { HeaderprodutosComponent } from '../headerprodutos/headerprodutos.component';
import { NavprodutosComponent } from '../navprodutos/navprodutos.component';

@Component({
  selector: 'app-produtos',
  imports: [HeaderprodutosComponent, NavprodutosComponent  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
