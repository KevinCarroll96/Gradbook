import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EntertainmentRoutingModule } from "./entertainment-routing.module";
import { EntertainmentComponent } from "./entertainment.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EntertainmentRoutingModule
    ],
    declarations: [
        EntertainmentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EntertainmentModule { }
