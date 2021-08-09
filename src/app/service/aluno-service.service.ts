import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import{map,tap,catchError} from 'rxjs/operators';
import { HttpClient,HttpHeaders} from '@angular/common/http';

import { Aluno } from '../model/aluno';
@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {

  private url = "http://localhost:8080/aluno"

  httpOption = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  //lista todos os alunos
  lista():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.url).pipe(
      catchError(this.handleError<Aluno[]>("Erro ao pegar alunos",[]))
      );
  }
  //adicionar aluno
  adicionar(aluno:Aluno):Observable<Aluno>{
    return this.http.post<Aluno>(this.url,aluno,this.httpOption).pipe(
      catchError(this.handleError<Aluno>("Erro ao inserir"))
    );
  }
  //pega aluno por id
  procurarPorId(id:number):Observable<Aluno>{
    return this.http.get<Aluno>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<Aluno>("erro ao procurar aluno"))
    );
  }

  //editar aluno

  editar(aluno:Aluno):Observable<Aluno>{
    return this.http.put<Aluno>(this.url,aluno,this.httpOption).pipe(
      tap(x=>console.log(x)),
      catchError(this.handleError<any>("Erro ao editar aluno"))
    );
  }

  //deletar aluno
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError<any>("Erro ao deletar aluno"))
    );
  }

//função para tratar errors, (substituir por um lambda com observable de algo vazio provavelmente é mais rapido e simples)
  private handleError<T>(operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.log(error);

      return of(result as T);
    }
  }
}
