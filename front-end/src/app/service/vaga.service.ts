import { Vaga } from "./../model/vaga.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

const BASE_URL_REPOS = environment.BASE_URL_REPOS;

const ehVaga = (vaga: Vaga) => {
  if (vaga?.labels) {
    return (
      vaga.labels.map((label) => label.name).indexOf("dependencies") == -1
    );
  }
  return true;
};

@Injectable({
  providedIn: "root",
})
export class VagaService {
  constructor(private http: HttpClient) {}

  private static readonly allowedLabels = ['job opportunity'];

  getAllVagasPaginacao(
    page: number,
    itensPorPagina: number
  ): Observable<Vaga[]> {
    return this.http
      .get<Vaga[]>(
        `${BASE_URL_REPOS}/soujava/vagas-java/issues?state=open&page=${page}&per_page=${itensPorPagina}&labels=${VagaService.allowedLabels}`
      )
      .pipe(
        switchMap((vagas) => {
          return of(vagas.filter(ehVaga));
        })
      );
  }


  getVagaById(id: number): Observable<Vaga | null> {
    return this.http
      .get<Vaga>(`${BASE_URL_REPOS}/soujava/vagas-java/issues/${id}`)
      .pipe(
        switchMap((vaga) => {
          if(!ehVaga(vaga)){
            return throwError(new Error("Not found"));
          }
          return of(vaga);
        })
      );
  }
}
