import { DemoTodayComponent } from "~/app/screens/demo-today/demo-today.component";
import { TestBed } from "@angular/core/testing";
import { BarcodeScanner } from "nativescript-barcodescanner";

var reflect = require("reflect-metadata");
var component = require("../app/screens/demo-today/demo-today.component");
describe("Tests for demo-today.component.ts", function() {
    var appComponent: DemoTodayComponent;
    beforeEach(function() {
        appComponent = new component.DemoTodayComponent();
    });

    it('onScanResult', () => {
        spyOn(console, 'log').and.returnValue(null);
        const evt = {
            text: '',
            format: ''
        }
        appComponent.onScanResult(evt);
        expect(console.log).toHaveBeenCalled();
    });

    it('openNotification', () => {
        spyOn(console, 'log').and.returnValue(null);
        spyOn(appComponent['barcodescanner'], 'scan').and.returnValue(Promise.resolve({format: 'format', text: 'text'}));

        appComponent.openNotification();
    });

    it('openNotification throw error', () => {
        spyOn(console, 'log').and.returnValue(null);
        spyOn(appComponent['barcodescanner'], 'scan').and.returnValue(Promise.reject({err: 'err message'}));

        appComponent.openNotification();
    });
});