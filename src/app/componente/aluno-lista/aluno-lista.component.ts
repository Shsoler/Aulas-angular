import { Component, OnInit } from '@angular/core';

import { AlunoServiceService } from 'src/app/service/aluno-service.service';
import { Aluno } from 'src/app/model/aluno';
@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoServiceService) { }

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this.alunoService.lista().subscribe((alunos) => {this.alunos = alunos});
  }

  remover(id:number):void{
    this.alunoService.delete(id).subscribe(()=>this.alunos = this.alunos.filter(aluno => aluno.id!== id));
  }

  adicionar(aluno:Aluno){
    
    this.alunos.push(aluno);
  }
}
