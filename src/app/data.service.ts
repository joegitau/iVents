import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Event } from "./event.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "/assets/_service/events.json";
  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  fetchEvent(id: number): Observable<Event> {
    return this.fetchEvents().pipe(
      map(events => events.find(event => event.id === id))
    );
  }
}
