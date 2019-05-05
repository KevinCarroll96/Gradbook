import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { UserPostComponent } from "./user-post.component";

const routes: Routes = [
    { path: "", component: UserPostComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UserPostRoutingModule { }
