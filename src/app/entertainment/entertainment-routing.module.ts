import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EntertainmentComponent } from "./entertainment.component";

const routes: Routes = [
    { path: "", component: EntertainmentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EntertainmentRoutingModule { }
