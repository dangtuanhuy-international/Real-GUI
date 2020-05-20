import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { DemoTodayComponent } from "../screens/demo-today/demo-today.component";
import { CurrentChallengeComponent } from "../screens/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "../screens/challenge-edit/challenge-edit.component";
import { ChallengeTabsComponent } from "../screens/challenge-tabs/challenge-tabs.component";


const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'edit-challenge', component: ChallengeEditComponent },
    {
        path: 'challenges', component: ChallengeTabsComponent,
        children: [
            { path: 'today', component: DemoTodayComponent , outlet:'today'},
            { path: 'current-challenge', component: CurrentChallengeComponent, outlet:'currentChallenge' },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
