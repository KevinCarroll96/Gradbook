import { Component, ChangeDetectorRef } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

//import * as Facebook from "nativescript-facebook";
//import { NavigationService } from "services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";

import { User } from "../shared/user.model";
@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent {
  //  constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page,private ref: ChangeDetectorRef, private navigationService: NavigationService)
    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page,private ref: ChangeDetectorRef)
     {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-social-container";
        this.page.statusBarStyle = "dark";

        Kinvey.init({
            appKey: "kid_ryw1a-QDE",
            appSecret: "f36bf51313f84979a7593accd142f012"
        });
        Kinvey.ping()
            .then((response) => {
                alert(`Kinvey Ping Success. Kinvey Service is alive`);
            })
            .catch((error) => {
                alert(`Kinvey Ping Failed.`);
            });

      }
      signup(email: string , password: string)
      {
        //var user = new Kinvey.User();
        if(Kinvey.User.getActiveUser()!=null)
        {
          const promise1 = Kinvey.User.logout()
          .then((user) => {
                console.log("logout successful");
              }).catch((error: Kinvey.BaseError) => {
                    alert("logout failed");

                  });
              }
          const promise = Kinvey.User.signup({
              username: "goose@mail.com",
              password: "goose",
          })
            .then((user: Kinvey.User) => {
                  console.log("signup successful");
                  this.onNavItemTap("home");
            }).catch((error: Kinvey.BaseError) => {
                  alert("Error"+ error);
                  return;
              });
        }
        onNavItemTap(navItemRoute: string): void
        {
            this._routerExtensions.navigate([navItemRoute],
              {
                transition:
                 {
                    name: "fade"
                }
            });
          }
    getCurrentAccessToken() {
      //  let accessToken = Facebook.getCurrentAccessToken();

      //  alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
    return_to_login() {
            appSettings.clear();
            //this.navigationService.go(['login'], "slideRight");
    }
}
