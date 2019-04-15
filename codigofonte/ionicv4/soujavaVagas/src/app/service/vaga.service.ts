import {Vaga} from './../model/vaga.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BASE_URL_REPOS} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  constructor(private http: HttpClient) {}

  getAllVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(
      `${BASE_URL_REPOS}/soujava/vagas-java/issues?state=open&page=1&per_page=100`
    );
  }

  getAllVagasPaginacao(
    page: number,
    itensPorPagina: number
  ): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(
      `${BASE_URL_REPOS}/soujava/vagas-java/issues?state=open&page=${page}&per_page=${itensPorPagina}`
    );
  }

  getVagaById(id: number): Observable<Vaga> {
    return this.http.get<Vaga>(
      `${BASE_URL_REPOS}/soujava/vagas-java/issues/${id}`
    );
  }
}
