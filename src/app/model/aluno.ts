import { Materia } from "./materia";

export interface Aluno {
    id:number;
    nome:string;
    data_nasc:Date;
    materia_id:Materia
}
