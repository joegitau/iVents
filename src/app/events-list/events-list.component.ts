import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DataService } from "../data.service";
import { IEvent } from "../event.model";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  errorMessage: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.dataService.fetchEvents().subscribe(
    //   events => (this.events = events),
    //   error => (this.errorMessage = error)
    // );

    this.events = this.route.snapshot.data["events"];
  }
}
