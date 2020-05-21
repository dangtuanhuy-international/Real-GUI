import { CameraDetailComponent } from "~/app/screens/demo-today/camera-detail/camera-detail.component";
import { TestBed, async } from "@angular/core/testing";
import { BarcodeScanner, ScanResult } from "nativescript-barcodescanner";
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

var reflect = require("reflect-metadata");
var mockScan = {
  scan: () => { },
  hasCameraPermission: () => { },
}

var component = require("../app/screens/demo-today/camera-detail/camera-detail.component");
describe("Tests for camera-detail.component.ts", function () {
  var appComponent: CameraDetailComponent;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      providers: [
        { provide: BarcodeScanner, useClass: mockScan},
      ]
    })
      .compileComponents();

  }));

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       { provide: BarcodeScanner, useClass: mockScan },
  //     ]
  //   })
  //     .compileComponents();
  // });

  beforeEach(function () {
    appComponent = new component.CameraDetailComponent();

    // TestBed.configureTestingModule({
    //     providers :[{provide: BarcodeScanner, useValue: mockScan}]
    // }).compileComponents();
  });

  it('onScanResult', () => {
    spyOn(console, 'log').and.returnValue(null);
    const evt = {
      text: '',
      format: ''
    }
    // Mock Time Out
    appComponent.pause = true;
    jasmine.clock().install();
    appComponent.onScanResult(evt);
    jasmine.clock().tick(4000);
    expect(console.log).toHaveBeenCalled();
    jasmine.clock().uninstall();
  });

  it('openNotification', () => {


    // const funcMock = {
    //     scan: () => {
    // spyOn(appComponent['barcodeScanner'], 'scan').and.returnValue(Promise.resolve({text: '', 'format': "QR_CODE"}));
    const result: ScanResult = { text: '', 'format': "QR_CODE" };
    spyOn(appComponent['barcodeScanner'], 'scan').and.returnValue(Promise.resolve(result));
    spyOn(appComponent['barcodeScanner'], 'hasCameraPermission').and.returnValue(Promise.resolve(true));
    //     }
    // }


    const log = spyOn(console, 'log');
    // spyOn(appComponent['barcodescanner'], 'scan').and.returnValue(Promise.resolve({format: 'format', text: 'text'}));
    // spyOn(appComponent['barcodescanner'], 'hasCameraPermission').and.returnValue(Promise.resolve({boolean: true}));
    // jasmine.createSpyObj('scanTapped').and.callThrough();
    // spyOn(appComponent['barcodeScanner'], 'scan').and.callThrough();
    // var scan = jasmine.createSpy().and.callFake()

    // spyOn(appComponent['barcodeScanner'], 'hasCameraPermission');

    appComponent.scanTapped();

    expect(log).toHaveBeenCalledWith(JSON.stringify(result));
  });
});