import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//import { UserService } from "./shared/kinvey.common";
import { PlacesService } from "./shared/kinvey.places";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    //  UserService,
      PlacesService,
],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
