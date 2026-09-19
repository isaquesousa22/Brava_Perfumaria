import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'produto',
    component: ProdutoComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  }
];