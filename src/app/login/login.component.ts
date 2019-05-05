import { Component, OnInit } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { User } from "../shared/user.model";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})

export class LoginComponent implements OnInit {
    user: User;
    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
    //constructor() {

        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        this.user= new User();
        this.user.username = "";
        this.user.password ="";
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

    login() {
        if(Kinvey.User.getActiveUser()==null){
          console.log("Username: " + this.user.username);
          console.log("Password: " + this.user.password);
          const promise = Kinvey.User.login(this.user.username, this.user.password)
            .then((user: Kinvey.User) => {
                console.log("Login Successful");
                this.onNavItemTap("home");
            })
            .catch((error: Kinvey.BaseError) => {
                alert("Login Failed" + error);

              });
            }
          else
          {
            alert("Error: A user is already logged in!");
          }

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
