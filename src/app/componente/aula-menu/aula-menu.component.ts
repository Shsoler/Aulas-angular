import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aula-menu',
  templateUrl: './aula-menu.component.html',
  styleUrls: ['./aula-menu.component.css']
})
export class AulaMenuComponent implements OnInit {

  page:string = "aluno";
  constructor(private location:Location) { }

  ngOnInit() {
    this.checkLocal();
  }
  checkLocal(){
    const path:string = this.location.path();
    if(path.includes("aluno"))
        this.page = "aluno";
      else
        this.page = "materia";
    console.log(this.location.onUrlChange(link=>{
      if(link.includes("aluno"))
        this.page = "aluno";
      else
        this.page = "materia";
    }));
  }
}
