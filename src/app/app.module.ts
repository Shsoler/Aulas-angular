import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlunoListaComponent } from './componente/aluno-lista/aluno-lista.component';
import { AlunoAdicionarComponent } from './componente/aluno-adicionar/aluno-adicionar.component';
import { AlunoDetalhesComponent } from './componente/aluno-detalhes/aluno-detalhes.component';
import { MateriaListaComponent } from './componente/materia-lista/materia-lista.component';
import { MateriaDetalhesComponent } from './componente/materia-detalhes/materia-detalhes.component';
import { AulaMenuComponent } from './componente/aula-menu/aula-menu.component';
import { ProfessorListaComponent } from './componente/professor-lista/professor-lista.component';
import { ProfessorDetalheComponent } from './componente/professor-detalhe/professor-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoListaComponent,
    AlunoAdicionarComponent,
    AlunoDetalhesComponent,
    MateriaListaComponent,
    MateriaDetalhesComponent,
    AulaMenuComponent,
    ProfessorListaComponent,
    ProfessorDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
