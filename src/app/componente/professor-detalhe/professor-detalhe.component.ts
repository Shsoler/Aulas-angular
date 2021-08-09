import { Component, OnInit } from '@angular/core';
import { observable, Observable,of, throwError,from } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrls: ['./professor-detalhe.component.css']
})
export class ProfessorDetalheComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }


}
