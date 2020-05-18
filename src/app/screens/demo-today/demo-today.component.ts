import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
  selector: 'ns-demo-today',
  moduleId: module.id,
  templateUrl: './demo-today.component.html',
  styleUrls: ['./demo-today.component.css']
})
export class DemoTodayComponent implements OnInit {
  barcodescanner: any;

  constructor
    (private routerExtensions: RouterExtensions) {
        this.barcodescanner = new BarcodeScanner();
      }

  ngOnInit(): void {
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  public onScanResult(evt) {
    console.log(`onScanResult: ${evt.text} (${evt.formart})`);
  }

  openNotification() {
    console.log("OPEN NOTIFICATION");

    this.barcodescanner.scan({
        formats: "QR_CODE, EAN_13",
        cancelLabel: "EXIT. Also, try the volume buttons!", // IOS only, default 'Close'
        cancelLabelBackgroundColor: "#333333", // IOS only, default '#000000' (black)

        showFlipCameraButton: true, // default fasle
        preferFrontCamera: false, // default false
        showTorchButton: true, // default false
        beepOnScan: true, // Play on Suppress beep on scan (default true)
        torchOn: false, // launch with the flashlight on (default false)
        closeCallback: () => {
            console.log("Scanner closed");
        }, // invoked when the scanner was closed (success or abort)

        openSettingIfPermissionWasPreviouslyDenied: true // On IOS you can send the user to the settings app if access was previously denied
    }).then((result) => {
        // Note that this Promis is never invoked when a 'continuousScanCallback' function is provided
        console.log({
            title: "Scan result",
            message: "Format: " + result.format + ",\nValue: " + result.text,
            okButtonText: "OK"
        });
      }, (errorMessage) => {
        console.log("No scan. " + errorMessage);
      }
    );
  };
}
