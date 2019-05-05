import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    constructor(private _routerExtensions: RouterExtensions) {
      Kinvey.init({
          appKey: "kid_ryw1a-QDE",
          appSecret: "f36bf51313f84979a7593accd142f012"
      });
      Kinvey.ping()
          .then((response) => {
              console.log(`Kinvey Ping Success. Kinvey Service is alive`);
          })
          .catch((error) => {
              alert(`Kinvey Ping Failed.`+error);
          });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onNavItemTap(navItemRoute: string): void {
        this._routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
}
    logout(){
      if(Kinvey.User.getActiveUser()!=null)
      {

          const promise1 = Kinvey.User.logout()
          .then((user) => {
              console.log("logout successful");
              this.onNavItemTap("home");
            }).catch((error: Kinvey.BaseError) => {
                alert("logout failed: "+error);

              });
            }
        else
        {
          alert("Error: User is not signed in!");
        }
      }
}
