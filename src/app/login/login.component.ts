import { Component, OnInit } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
//import * as data from "~/src/app/users.json";
@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
    //constructor() {

        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";

    }
    ngOnInit(): void {
        // Init your component properties here.
    }

    login(email, password) {
  //    x = JSON.parse(data);
    //  alert("Email:" + data.users[0].email);


      if (!email || !password) {
          alert("Please provide both an email address and password.");
          return;
      }

      if (email!="goose@mail.com" && password !="goose")
      {
        alert("Invaid Email or Password!\n  Email: goose@mail.net\n Password: goose");
      }
      else{
        this.onNavItemTap("/home");
      }


    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    signup() {
/*        if (Kinvey.User.signup() == null) {
            Kinvey.User.loginWithMIC()
                .then((user: Kinvey.User) => {
                    this.navigateHome();
                    console.log("user: " + JSON.stringify(user));
                })
                .catch((error: Kinvey.BaseError) => {
                    alert("An error occurred. Check your Kinvey settings.");
                    console.log("error: " + error);
                });
        } else {
            this.navigateHome();
        }
*/    }

    onNavItemTap(navItemRoute: string): void {
        this._routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
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
}
