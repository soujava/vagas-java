import { VagaService } from "src/app/service/vaga.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Vaga } from "src/app/model/vaga.model";
import { DomSanitizer } from "@angular/platform-browser";
import { marked } from "marked";

@Component({
  selector: "app-cadastro-vaga",
  templateUrl: "./cadastro-vaga.page.html",
  styleUrls: ["./cadastro-vaga.page.scss"],
})
export class CadastroVagaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private sanitizer: DomSanitizer
  ) {}

  private renderer = new marked.Renderer();
  private defaultOptions: marked.MarkedOptions = {};

  vaga: Vaga;
  ngOnInit() {
    this.applyDefaultOptions();
    this.vagaService
      .getVagaById(this.route.snapshot.params["id"])
      .subscribe((result) => {
        this.vaga = result;
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
