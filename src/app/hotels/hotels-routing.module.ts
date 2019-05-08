import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HotelsComponent } from "./hotels.component";

const routes: Routes = [
    { path: "", component: HotelsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HotelsRoutingModule { }
