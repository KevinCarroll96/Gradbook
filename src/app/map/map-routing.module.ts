import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MapComponent } from "./map.component";

const routes: Routes = [
    { path: "", component: MapComponent },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MapRoutingModule { }