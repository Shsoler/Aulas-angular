import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Aluno } from 'src/app/model/aluno';
import { Materia } from 'src/app/model/materia';

import { AlunoServiceService } from 'src/app/service/aluno-service.service';
import { MateriaService } from 'src/app/service/materia.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  @Input() aluno?:Aluno;
  materias?:Materia[] = [];

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private alunoService:AlunoServiceService,
    private materiaService:MateriaService) { }

  ngOnInit() {
    this.getAluno();
    this.getMateria();  
  }
  getAluno():void{
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.alunoService.procurarPorId(id).subscribe(aluno=>this.aluno=aluno);
  }
  getMateria():void{
    this.materiaService.listar().subscribe(lista => this.materias = lista);
  }
  editar():void{
    this.alunoService.editar(this.aluno).subscribe(()=>
    this.location.back())
  }
}
