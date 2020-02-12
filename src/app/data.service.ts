import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Event } from "./event";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "/assets/_service/events.json";
  constructor(private http: HttpClient) {}

  fetchEvents() {
    return this.http.get(this.url);
  }
}
