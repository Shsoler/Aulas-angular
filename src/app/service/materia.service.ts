import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';

import { Materia } from '../model/materia';
import { Aluno } from '../model/aluno';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  url = "http://localhost:8080/materia"

  httpConfig = {headers:new HttpHeaders({'Content-Type':'application/json'})};

  constructor(private http:HttpClient) { }

  //lista materia
  listar():Observable<Materia[]>{
    return this.http.get<Materia[]>(this.url).pipe(
      catchError(this.handleError("erro ao buscar materia",[]))
    );
  }

  //adiciona materia
  adicionar(materia:Materia):Observable<Materia>{
    return this.http.post<Materia>(this.url,materia,this.httpConfig).pipe(
      catchError(this.handleError<Materia>("erro ao adicionar materia"))
    );
  }

  //procurar materia
  procurar(id: number):Observable<Materia>{
    return this.http.get<Materia>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<Materia>("erro ao buscar materia"))
    );
  }

  //editar materia
  atualizar(materia:Materia):Observable<Materia>{
    return this.http.put<Materia>(this.url,materia,this.httpConfig).pipe(
      catchError(this.handleError<Materia>("Erro ao atualizar Materia"))
    );
  }

  //deletar materia
  deletar(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<any>("erro ao deletar materia"))
    )
  }

  //pegar alunos da materia
  pegarAlunos(id:number):Observable<Aluno[]>{
    return this.http.get<Aluno[]>(`${this.url}/${id}/alunos`).pipe(
      catchError(this.handleError<Aluno[]>("Erro ao encontra alunos de materia",[]))
    );
  }
  //função para tratar errors, (substituir por um lambda com observable de algo vazio provavelmente é mais rapido e simples)
  private handleError<T>(message:string="operation",result?:T){
    return (error:any):Observable<T> =>{
      console.log(error);
        return of(result as T)
    }
  }
}
