import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosComponent } from './produtos/produtos.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'compra',
    component: CompraComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
    
    
  {
      path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'contato',
    component: ContatoComponent
  },

  {
    path: 'produtos',
    component:ProdutosComponent
  }
];