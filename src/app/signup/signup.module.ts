import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SignupRoutingModule } from "./signup-routing.module";
import { SignupComponent } from "./signup.component";

//import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SignupRoutingModule
    ],
    declarations: [
        SignupComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignupModule { }
