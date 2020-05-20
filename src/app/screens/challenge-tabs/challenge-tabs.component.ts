import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css']
})
export class ChallengeTabsComponent implements OnInit {

  constructor(private page: Page, private router: RouterExtensions, private active: ActivatedRoute) { this.page.actionBarHidden = true; }

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
        }
      ],
      {
        relativeTo: this.active
      }
    );
    this.page.actionBarHidden = true;
  }

}
