
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
/*
@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {


}*/
//import { WebView } from "tns-core-modules/ui/web-view";
import {Observable} from "tns-core-modules/data/observable";
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "Entertainment",
    moduleId: module.id,
    templateUrl: "./entertainment.component.html"
})
export class EntertainmentComponent implements AfterViewInit {
    public webViewSrc: string = "https://goo.gl/maps/3dd4FcC5T3YKcMRC9";
    public enabled: boolean = false;
    @ViewChild("myWebView") webViewRef: ElementRef;
    //@ViewChild("urlField") urlFieldRef: ElementRef;
    //@ViewChild("labelResult") labelResultRef: ElementRef;
    ngAfterViewInit()
    {

    }
    ngOnInit() {
        let webview: WebView = this.webViewRef.nativeElement;
        /*let label: Label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            label.text = message;
            console.log("WebView message - " + message);
        }*/
  //    );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
/*
    goBack() {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoBack) {
            webview.goBack();
            this.enabled = true;
        }
    }
    goForward() {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoForward) {
            webview.goForward();
        } else {
            this.enabled = false;
        }
    }
    submit(args: string) {
        let textField: TextField = this.urlFieldRef.nativeElement;
        this.enabled = false;
        if (args.substring(0, 4) === "http") {
            this.webViewSrc = args;
            textField.dismissSoftInput();
        } else {
            alert("Please, add `http://` or `https://` in front of the URL string");
        }
    }
*/
}
