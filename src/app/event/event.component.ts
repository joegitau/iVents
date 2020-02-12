import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  getEventName() {
    this.eventClick.emit(this.event.Title);
  }
}
