import { Component, ChangeDetectorRef } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

//import * as Facebook from "nativescript-facebook";
import { NavigationService } from "services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";


@Component({
    selector: "Signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html"
})
export class SignupComponent {

    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page,private ref: ChangeDetectorRef, private navigationService: NavigationService)
     {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-social-container";
        this.page.statusBarStyle = "dark";

        // have to init after facebook sdk inited
      //  setTimeout(() => {
      //    this.init();
    //    }, 100);
    }

   //onLogin(eventData: Facebook.LoginEventData) {
      onLogin() {
    //    if (eventData.error) {
    //        alert("Error during login: " + eventData.error);
    //    } else {
          //  appSettings.setString("access_token", eventData.loginResponse.token);
            this.navigationService.go(['home']);
        }

    register()
    {
        this.navigationService.go(['signup']);
    }
    login() {
      //  Facebook.login((error, fbData) => {
        //    if (error) {
          //      alert("Error during login: " + error.message);
      //      } else {
          //    appSettings.setString("access_token", fbData.token);
                this.navigationService.go(['home']);
        //    }
      //  });
    }

        onNavItemTap(navItemRoute: string): void
        {
            this._routerExtensions.navigate([navItemRoute],
              {
                transition:
                 {
                    name: "fade",
                };
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
            this.navigationService.go(['login'], "slideRight");
    }
}
