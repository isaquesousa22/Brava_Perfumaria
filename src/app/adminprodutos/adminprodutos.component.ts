import { Component, inject, OnInit } from '@angular/core';
import { CadastroProdutosService } from '../services/cadastro-produtos.service';
import { Produtos } from '../model/produtos';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-adminprodutos',
  imports: [RouterLink],
  templateUrl: './adminprodutos.component.html',
  styleUrl: './adminprodutos.component.css'
})
export class AdminprodutosComponent implements OnInit {
      listaProdutos:Produtos[] = [];

      private produtoService = inject(CadastroProdutosService);
      private router = inject(Router);

      ngOnInit(): void { 
        this.produtoService.listar().subscribe((produtos) => {
          this.listaProdutos = produtos;
        });
       }


    editar(id:string){
      this.router.navigate(['/cadastro-produtos', id]);
    }

    excluir(id:string){
    this.produtoService.excluir(id).subscribe({
      next: ()=> {this.listaProdutos.filter(produto=> produto.id !== id);
      }
    });
   }


}
