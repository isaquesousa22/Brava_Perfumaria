import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },

  {
    path: 'produto',
    component: ProdutoComponent
  },

  {
    path: 'sobre',
    component: SobreComponent
  }
];