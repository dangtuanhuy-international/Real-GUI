import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { DemoTodayComponent } from "../screens/demo-today/demo-today.component";


const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'today', component: DemoTodayComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
