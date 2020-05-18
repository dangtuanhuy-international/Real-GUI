import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
@Component({
  selector: 'ns-demo-today',
  templateUrl: './demo-today.component.html',
  styleUrls: ['./demo-today.component.css']
})
export class DemoTodayComponent implements OnInit {

  constructor
    (private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
