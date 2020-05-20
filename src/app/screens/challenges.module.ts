import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { SharedModule } from '../shared/shared.module';
import { DemoTodayComponent } from './demo-today/demo-today.component';

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        DemoTodayComponent,
    ],
    imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule]
})
export class ChallengesModule { }