import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "/assets/_service/events.json";
  constructor(private http: HttpClient) {}

  fetchEvents() {
    this.http.get(this.url);
  }
}
