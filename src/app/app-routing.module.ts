import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
     { path: "signup", loadChildren: "~/app/signup/signup.module#SignupModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "restaurants", loadChildren: "~/app/restaurants/restaurants.module#RestaurantsModule" },
    { path: "hotels", loadChildren: "~/app/hotels/hotels.module#HotelsModule" },
    { path: "entertainment", loadChildren: "~/app/entertainment/entertainment.module#EntertainmentModule" },
    { path: "map", loadChildren: "~/app/map/map.module#MapModule" }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
