import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";

@Component({
  selector: "app-events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent implements OnInit {
  public events;
  handleEventClicked(data) {
    console.log(data);
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchEvents().subscribe(events => {
      this.events = events;
    });
  }
}
