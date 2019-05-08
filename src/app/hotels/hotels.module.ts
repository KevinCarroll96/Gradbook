import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HotelsRoutingModule } from "./hotels-routing.module";
import { HotelsComponent } from "./hotels.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HotelsRoutingModule
    ],
    declarations: [
        HotelsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HotelsModule { }
