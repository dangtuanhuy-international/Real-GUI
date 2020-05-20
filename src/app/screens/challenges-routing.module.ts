import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { DemoTodayComponent } from './demo-today/demo-today.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: ChallengeTabsComponent,
        children: [
            { path: 'today', component: DemoTodayComponent, outlet: 'today' },
            {
                path: 'current-challenge',
                component: CurrentChallengeComponent,
                outlet: 'currentChallenge'
            }
        ]
    },
    {
        path: ':mode',
        loadChildren:
            '~/app/screens/challenge-edit/challenge-edit.module#ChallengeEditModule'
    },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChallengesRoutingModule { }