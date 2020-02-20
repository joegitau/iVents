import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  @Input() event: any;

  constructor(private toastr: ToastrService) {}
  ngOnInit() {}

  handleEventClick(eventName) {
    this.toastr.success(eventName);
  }
}
