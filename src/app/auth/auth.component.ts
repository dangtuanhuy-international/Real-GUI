import { Component, OnInit } from '@angular/core';
import * as log from 'loglevel';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "tns-core-modules/ui/page";
@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: RouterExtensions,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
  }
  onSignIn() {
    this.router.navigate(['/today'],{clearHistory: true});
    log.warn('WARING');
    log.info('INFO');
    log.error('FAIL')
  }
}
