import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { DataService } from "../data.service";

@Component({
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private events: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
   this.route.paramMap.subscribe( params => {
     let id = +params.get('id'); // coerce into an integer
     this.events.fetchEvent(id).subscribe( event => this.event = event);
   });
  }
}
