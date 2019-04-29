import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

@Injectable()
export class PlacesService {
    private dataStore;

    constructor() {
        this.dataStore = Kinvey.DataStore.collection("Places");
    }

    get(cat) {
        const query = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.equalTo('category', cat);
        query.descending("_kmd.ect");
        return this.dataStore.find(query);
    }

    save(task) {
        return this.dataStore.save(task);
    }

    handleErrors(error: Kinvey.BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}
