import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.scss"]
})
export class CreateEventComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancelEventCreation() {
    return this.router.navigate(["/events"]);
  }
}
