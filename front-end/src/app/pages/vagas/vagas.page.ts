import { Vaga } from "./../../model/vaga.model";
import { Component, OnInit } from "@angular/core";
import { VagaService } from "src/app/service/vaga.service";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-vagas",
  templateUrl: "./vagas.page.html",
  styleUrls: ["./vagas.page.scss"],
})
export class VagasPage implements OnInit {
  constructor(
    private vagaService: VagaService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  vagas: Vaga[] = [];
  vagasFilter: Vaga[] = [];
  page = 1;
  pesquisa = "";

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      spinner: "bubbles",
    });
    loading.present();
    this.vagaService.getAllVagasPaginacao(this.page, 100).subscribe({
      next: async (result: Vaga[]) => {
        this.vagasFilter = result;
        this.vagas = this.vagasFilter;
        await loading.dismiss();
      },
      error: async (response: any) => {
        await loading.dismiss();
        console.error(response);
        const { error, statusText } = response;
        let { message } = error ? error : { message: statusText };

        const alert = await this.alertController.create({
          cssClass: "my-custom-class",
          header: "Ops!!!",
          message,
          buttons: [
            {
              text: "OK",
              id: "confirm-button",
              handler: () => {
                this.router.navigate(["home"]);
                alert.dismiss();
              },
            },
          ],
        });
        await alert.present();
      },
      complete: () => {},
    });
  }

  openVaga(vaga: Vaga) {
    this.router.navigate([`/cadastro-vaga/${vaga.number}`]);
  }

  loadData(event: any) {
    this.vagaService
      .getAllVagasPaginacao(this.page++, 10)
      .subscribe((result) => {
        this.vagasFilter = this.vagasFilter.concat(result);
        this.vagas = this.vagasFilter;
        event.target.complete();
      });
  }

  buscar() {
    this.vagas = this.vagasFilter.filter((a) =>
      a.title.toLocaleLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  cancelar() {
    this.vagas = this.vagasFilter;
  }

  limpar() {
    this.pesquisa = "";
  }

  openNewVaga() {
    window.open(
      "https://github.com/soujava/vagas-java/issues/new/choose",
      "_blank"
    );
  }

  getLabels(labels: any[]) {
    if (labels) {
      let labelMap = labels.map((a) => a.name);
      if (labelMap.length > 0) {
        return labelMap.reduce((a) => a + ", ");
      }
    }
  }
}
