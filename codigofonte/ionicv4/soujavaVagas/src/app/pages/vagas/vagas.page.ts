import {Vaga} from './../../model/vaga.model';
import {Component, OnInit} from '@angular/core';
import {VagaService} from 'src/app/service/vaga.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss']
})
export class VagasPage implements OnInit {
  constructor(private vagaService: VagaService, private router: Router) {}

  vagas: Vaga[] = [];
  vagasFilter: Vaga[] = [];
  page = 1;
  pesquisa = '';

  ngOnInit() {
    this.vagaService.getAllVagasPaginacao(this.page, 100).subscribe(result => {
      this.vagasFilter = result;
      this.vagas = this.vagasFilter;
    });
  }

  openVaga(vaga) {
    this.router.navigate([`/cadastro-vaga/${vaga.number}`]);
  }

  loadData(event) {
    this.vagaService.getAllVagasPaginacao(this.page++, 10).subscribe(result => {
      this.vagasFilter = this.vagasFilter.concat(result);
      this.vagas = this.vagasFilter;
      event.target.complete();
    });
  }
  buscar() {
    this.vagas = this.vagasFilter.filter(a =>
      a.title.toLocaleLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  cancelar() {
    this.vagas = this.vagasFilter;
  }

  limpar() {
    this.pesquisa = '';
  }

  openNewVaga() {
    window.open('https://github.com/soujava/vagas-java/issues/new', '_blank');
  }

  getLabels(labels) {
    if (labels) {
      let labelMap = labels.map(a => a.name);
      if (labelMap.length > 0) {
        return labelMap.reduce(a => a + ', ');
      }
    }
  }
}
