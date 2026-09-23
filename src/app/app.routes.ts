import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

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
  },
    
    
  {
      path: 'sobre',
    component: SobreComponent
  },

  {
    path: 'contato',
    component: ContatoComponent
  }
];