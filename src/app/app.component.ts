import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { Kinvey } from 'kinvey-nativescript-sdk';
@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    user: string;
    temp: Kinvey.User;
    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.

        Kinvey.init({
            appKey: "kid_ryw1a-QDE",
            appSecret: "f36bf51313f84979a7593accd142f012"
        });
        Kinvey.ping()
            .then((response) => {
                console.log(`Kinvey Ping Success. Kinvey Service is alive`);
            })
            .catch((error) => {
                alert(`Kinvey Ping Failed.`);
            });
            this.getUser();
      }



    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.getUser();
        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
    getUser()
    {
      if(Kinvey.User.getActiveUser()==null)
      {

        this.user = "Logged Off";
      }
      else
      {
        this.temp = Kinvey.User.getActiveUser();
        if(this.temp.isActive()==false)
        {
          this.user="Logged Off";
        }
        else
        {

          this.user = this.temp.username;
        }
      }
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        this.getUser();
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
