import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { CameraDetailComponent } from './screens/demo-today/camera-detail/camera-detail.component';
import { registerElement } from "nativescript-angular";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives'
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { SharedModule } from "./shared/shared.module";
import { DayModalComponent } from "./screens/day-modal/day-modal.component";


registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        DayModalComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [DayModalComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
