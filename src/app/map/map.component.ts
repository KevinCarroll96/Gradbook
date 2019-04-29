import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Kinvey } from 'kinvey-nativescript-sdk';
@Component({
    selector: "Map",
    moduleId: module.id,
    templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    /*
	public food()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Food');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public ent()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Entertainment');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public campus()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Campus');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	public lodging()
	{
		const query = new Kinvey.Query();
		query.equalTo('category', 'Lodging');
		const subscription = dataStore.find(query)
		  .subscribe((entities: {}[]) => {
			// ...
		  }, (error: Kinvey.BaseError) => {
			// ...
		  }, () => {
			// ...
		  });
	}
	*/
}
