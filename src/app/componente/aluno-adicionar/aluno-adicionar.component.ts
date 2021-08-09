import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

import { Aluno } from 'src/app/model/aluno';
import { Materia } from 'src/app/model/materia';
import { AlunoServiceService } from 'src/app/service/aluno-service.service';
import { MateriaService } from 'src/app/service/materia.service';

@Component({
  selector: 'app-aluno-adicionar',
  templateUrl: './aluno-adicionar.component.html',
  styleUrls: ['./aluno-adicionar.component.css']
})
export class AlunoAdicionarComponent implements OnInit {

  materias?:Materia[] =[];

  @Output() eventoDeCadastro = new EventEmitter<Aluno>();
  constructor(
    private alunoService:AlunoServiceService,
    private materiaService:MateriaService) { }

  ngOnInit() {
    this.buscarMateria();
  }

  buscarMateria(){
    this.materiaService.listar().subscribe(lista=>this.materias = lista);
  }

  alunoAdicionar(nome:string,data:string,materia:string):void{
    if(nome && data && materia)
    this.alunoService.adicionar({nome,data_nasc:new Date(data),materia_id:this.materias.find(x=>x.id===Number(materia))} as Aluno).subscribe(novoaluno =>
      this.eventoDeCadastro.emit(novoaluno)
    );
    
  }
}
