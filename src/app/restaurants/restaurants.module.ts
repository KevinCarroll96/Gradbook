import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RestaurantsRoutingModule } from "./restaurants-routing.module";
import { RestaurantsComponent } from "./restaurants.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RestaurantsRoutingModule
    ],
    declarations: [
        RestaurantsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RestaurantsModule { }
