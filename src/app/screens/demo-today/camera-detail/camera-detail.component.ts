import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from 'nativescript-barcodescanner';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ns-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.css']
})
export class CameraDetailComponent implements OnInit {
  pause = true;

  constructor( private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner) {
      setTimeout(() => {
        this.pause = false;
      }, 2000)
    }

  ngOnInit(): void {
  }

  public onScanResult(evt) {
    console.log(`onScanResult: ${evt.text} (${evt.format})`);

    this.pause = true;
    console.log("Pause");
    setTimeout(() => {
      this.pause = false;
      console.log("Unpause");
    }, 4000);
  }

  public scanTapped(): void {
    let scan = () => {
      this.barcodeScanner.scan({
        formats: "QR_CODE, EAN_13",
        beepOnScan: true,
        reportDuplicates: true,
        preferFrontCamera: false
      })
        .then(result => console.log(JSON.stringify(result)))
        .catch(error => console.log(error));
    };

    this.barcodeScanner.hasCameraPermission()
      .then(granted => granted ? scan() : console.log("Permission denied"))
      .catch(() => {
        this.barcodeScanner.requestCameraPermission()
        .then(() => scan());
      });
  }

}
