import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from './screens/current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './screens/challenge-edit/challenge-edit.component';
import { AuthComponent } from './auth/auth.component';
import { DemoTodayComponent } from './screens/demo-today/demo-today.component';
import { ActionBarComponent } from './shared/ui/action-bar/action-bar.component';
import { CameraDetailComponent } from './screens/demo-today/camera-detail/camera-detail.component';
import { registerElement } from "nativescript-angular";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { ChallengeTabsComponent } from './screens/challenge-tabs/challenge-tabs.component';




registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        AuthComponent,
        DemoTodayComponent,
        ActionBarComponent,
        CameraDetailComponent,
        ChallengeTabsComponent,
    ],
    providers: [BarcodeScanner],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [DemoTodayComponent],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
