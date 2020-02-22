import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IEvent } from "./event.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private eventsUrl = "./assets/_service/events.json";
  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventsUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  fetchEvent(id: number): Observable<IEvent> {
    return this.fetchEvents().pipe(
      map(events => events.find(event => event.id === id))
    );
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent[]>(this.eventsUrl).pipe(
      map((events: IEvent[]) => this.handleEventMapping(events, id)),
      tap(data => console.log("Event: ", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    const errMessage = { status: err.status, error: err.message };
    return throwError(errMessage);
  }

  private handleEventMapping(events: IEvent[], id: number): IEvent {
    if (id === 0) {
      return {
        id: 0,
        name: "",
        price: 0
      };
    }
    return events.find(e => e.id === id);
  }
}
