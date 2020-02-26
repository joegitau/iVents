import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { IEvent } from "./event.model";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class EventsResolver implements Resolve<Observable<IEvent[]>> {
  constructor(private eventsService: DataService) {}

  resolve(): Observable<IEvent[]> {
    return this.eventsService.fetchEvents().pipe(map(events => events));
  }
}
