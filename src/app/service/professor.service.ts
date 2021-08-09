import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Professor } from '../model/professor';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url: string = "http://localhost:8080/professor";

  httpConfig = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  //listar professores
  getProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.url).pipe(
      catchError(() => {
        console.log("Erro ao pegar professores");
        return of([] as Professor[]);//maneira sem utilizar função handleError, mais facil de entender e mais direto, porém mais verboso dependendo da quantidade de vezes usada
      }));
  }
  //pegar professor por id
  getProfessor(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.url}/${id}`).pipe(
      catchError(() => {
        console.log(`Erro ao procurar professor id:${id}`);
        return of({} as Professor);
      }));
  }
  //adicionar professor
  adicionarProfessor(professor: Professor): Observable<any> {
    return this.http.post(this.url, professor, this.httpConfig).pipe(
      catchError(() => {
        console.log("Erro ao inserir professor");
        return of({});
      })
    );
  }
  //atualizar professor
  atualizarProfessor(professor: Professor): Observable<any> {
    return this.http.put(this.url, professor, this.httpConfig).pipe(
      catchError(() => {
        console.log(`Erro ao editar professor id:${professor.id}`);
        return of({});
      }));
  }
  //deletar professor
  deletarProfessor(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${this.http}`);
  }
}
