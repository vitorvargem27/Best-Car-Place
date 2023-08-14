import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  //Declarando a página home//
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},

  {
    path: 'login-page', component: LoginPageComponent
  },

  {
    path: 'detalhes', component: DetalhesComponent
  },

  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'contato', component: ContatoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
