import { VagaService } from "src/app/service/vaga.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Vaga } from "src/app/model/vaga.model";
import { DomSanitizer } from "@angular/platform-browser";
import { marked } from "marked";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-cadastro-vaga",
  templateUrl: "./cadastro-vaga.page.html",
  styleUrls: ["./cadastro-vaga.page.scss"],
})
export class CadastroVagaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private sanitizer: DomSanitizer,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  private renderer = new marked.Renderer();
  private defaultOptions: marked.MarkedOptions = {};

  vaga: Vaga;
  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      spinner: "bubbles",
    });
    loading.present();

    this.applyDefaultOptions();
    this.vagaService.getVagaById(this.route.snapshot.params["id"]).subscribe({
      next: async (result: Vaga) => {
        this.vaga = result;
        await loading.dismiss();
      },
      error: async (response: any) => {
        await loading.dismiss();
        console.error(response);
        const { error, statusText } = response;
        let { message } = error ? error : { message: statusText };

        if (!message && response.message) {
          message = response.message;
        }

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
    });
  }

  getContent(content: string) {
    const html = content ? marked(content, this.defaultOptions) : "";
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getLabels(labels) {
    if (labels) {
      let labelMap = labels.map((a) => a.name);
      if (labelMap.length > 0) {
        return labelMap.reduce((a) => a + ", ");
      }
    }
  }

  private applyDefaultOptions() {
    // Native links will open in new tab
    this.renderer.link = function (href, title, text) {
      title = title || href;
      return `<a target="_blank" rel="noopener" href="${href}" title="${title}">${text}</a>`;
    };
    this.defaultOptions.renderer = this.renderer;
  }
}
