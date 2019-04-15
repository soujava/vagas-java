import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-github-auth",
  templateUrl: "./github-auth.page.html",
  styleUrls: ["./github-auth.page.scss"]
})
export class GithubAuthPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  accessToken: any;


  getAccessToken(code) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((param: any) => {
      let code = param["code"];
      this.getAccessToken(code);
    });
  }
}
