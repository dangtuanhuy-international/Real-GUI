import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Utils } from '../../utils/utils.const';
import { isAndroid, Page } from 'tns-core-modules';
declare var android: any;
@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css']
})
export class CurrentChallengeComponent implements OnInit {

  constructor(private router: RouterExtensions,
    private page: Page) { }

  ngOnInit(): void {
  }
  onEdit() {
    this.router.navigate(['edit-challenge']);
  }
  
}
