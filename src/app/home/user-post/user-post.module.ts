import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { UserPostRoutingModule } from "./user-post-routing.module";
import { UserPostComponent } from "./user-post.component";

@NgModule({
    imports: [
        NativeScriptModule,
        UserPostRoutingModule
    ],
    declarations: [
        UserPostComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UserPostModule { }
