import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Aluno } from 'src/app/model/aluno';
import { Materia } from 'src/app/model/materia';
import { AlunoServiceService } from 'src/app/service/aluno-service.service';
import { MateriaService } from 'src/app/service/materia.service';

@Component({
  selector: 'app-materia-detalhes',
  templateUrl: './materia-detalhes.component.html',
  styleUrls: ['./materia-detalhes.component.css']
})
export class MateriaDetalhesComponent implements OnInit {

  materia:Materia;
  alunos:Aluno[] = [];
  constructor(
    private materiaService:MateriaService,
    private alunoService:AlunoServiceService,
    private location:Location,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMateria(id);
  }
  getMateria(id:number){
    this.materiaService.procurar(id).subscribe(m=>{
      this.materia=m;
      this.materiaService.pegarAlunos(m.id).subscribe(alunos => this.alunos=alunos);
    })
  }
  materiaAtualizar():void{
    this.materiaService.atualizar(this.materia).subscribe(()=>this.location.back());
  }
  remover(id:number):void{
    this.alunoService.delete(id).subscribe(()=>this.alunos = this.alunos.filter(aluno => aluno.id!== id));
  }
}
