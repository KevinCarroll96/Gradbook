import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RestaurantsComponent } from "./restaurants.component";

const routes: Routes = [
    { path: "", component: RestaurantsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RestaurantsRoutingModule { }
