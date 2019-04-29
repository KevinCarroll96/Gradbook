import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
//import { UserService } from "./shared/kinvey.common";
import { PlacesService } from "../shared/kinvey.places";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent
    ],
    providers: [
    //  UserService,
      PlacesService,
],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
