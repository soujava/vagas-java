import {VagaService} from 'src/app/service/vaga.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Vaga} from 'src/app/model/vaga.model';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.page.html',
  styleUrls: ['./cadastro-vaga.page.scss']
})
export class CadastroVagaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService
  ) {}

  vaga: Vaga;
  ngOnInit() {
    this.vagaService
      .getVagaById(this.route.snapshot.params['id'])
      .subscribe(result => {
        this.vaga = result;
      });
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
