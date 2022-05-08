import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {path: 'vagas', loadChildren: () => import('./pages/vagas/vagas.module').then(m => m.VagasPageModule)},
  {
    path: 'github-auth',
    loadChildren: () => import('./github-auth/github-auth.module').then(m => m.GithubAuthPageModule)
  },
  {
    path: 'cadastro-vaga',
    loadChildren:
      () => import('./pages/cadastro-vaga/cadastro-vaga.module').then(m => m.CadastroVagaPageModule)
  },
  {
    path: 'cadastro-vaga/:id',
    loadChildren:
      () => import('./pages/cadastro-vaga/cadastro-vaga.module').then(m => m.CadastroVagaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
