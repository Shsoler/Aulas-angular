import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/service/materia.service';
@Component({
  selector: 'app-materia-lista',
  templateUrl: './materia-lista.component.html',
  styleUrls: ['./materia-lista.component.css']
})
export class MateriaListaComponent implements OnInit {

  titulo:string = "";
  materias?:Materia[] = [];
  constructor(private materiaService:MateriaService) { }

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias():void{
    this.materiaService.listar().subscribe(lista=>this.materias=lista);
  }

  remover(id:number):void{
    this.materiaService.deletar(id).subscribe(()=>this.materias = this.materias.filter(m=>m.id!==Number(id)));
  }
  materiaAdicionar():void{
    this.materiaService.adicionar({titulo:this.titulo} as Materia).subscribe(m => {this.materias.push(m);
    this.titulo="";
    });
  }
}
