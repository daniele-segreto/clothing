import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'prodotti',
    component: ProductsComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
