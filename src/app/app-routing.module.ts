import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetalhesComponent } from './componente/aluno-detalhes/aluno-detalhes.component';
import { AlunoListaComponent } from './componente/aluno-lista/aluno-lista.component';

import { MateriaListaComponent } from './componente/materia-lista/materia-lista.component';
import { MateriaDetalhesComponent } from './componente/materia-detalhes/materia-detalhes.component';

import { ProfessorDetalheComponent } from './componente/professor-detalhe/professor-detalhe.component';

const routes: Routes = [
  {path:'',redirectTo:"/aluno",pathMatch:'full'},
  {path:"aluno",component:AlunoListaComponent},
  {path:"aluno/:id",component:AlunoDetalhesComponent},
  {path:"materia",component:MateriaListaComponent},
  {path:"materia/:id",component:MateriaDetalhesComponent},
  {path:"professor",component:ProfessorDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
