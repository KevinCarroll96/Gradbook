//import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
//import { WebView } from "tns-core-modules/ui/web-view";
import {Observable} from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {WebView, LoadEventData} from "tns-core-modules/ui/web-view";
import { Page } from "tns-core-modules/ui/page";
import { TextField } from "tns-core-modules/ui/text-field";

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
//import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    //styleUrls: [' ./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    public webViewSrc: string = "https://twitter.com/ohhkim_/timelines/1124766989933785088?ref_src=twsrc%5Etfw"
    public enabled: boolean = false;
    @ViewChild("myWebView") webViewRef: ElementRef;
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngAfterViewInit()
    {

    }
    ngOnInit(){
        // Init your component properties here.
        let webview: WebView = this.webViewRef.nativeElement;
    //challengeDescription = ""

    //this.webViewSrc = "https://twitter.com/UNTnews?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/";
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
